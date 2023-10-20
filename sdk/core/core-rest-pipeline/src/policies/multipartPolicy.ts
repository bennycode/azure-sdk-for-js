// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { randomUUID, stringToUint8Array } from "@azure/core-util";
import { BodyPart, HttpHeaders, MultipartRequestBody, RequestBodyType } from "../interfaces";
import { PipelinePolicy } from "../pipeline";
import { concatenateStreams, toStream } from "../util/stream";

export const multipartPolicyName = "multipartPolicy";

function generateBoundary() {
  return `----AzSDKFormBoundary${randomUUID()}`;
}

function encodeHeaders(headers: HttpHeaders): string {
  return [...headers].map(([name, value]) => `${name}: ${value}`).join("\r\n");
}

function createBodyStream(
  parts: BodyPart[],
  boundary: string
): ReadableStream | NodeJS.ReadableStream {
  const streams = [
    stringToUint8Array(`--${boundary}\r\n`, "utf-8"),
    ...parts.flatMap((part) => [
      stringToUint8Array(encodeHeaders(part.headers), "utf-8"),
      stringToUint8Array("\r\n\r\n", "utf-8"),
      part.body,
      // delimiter
      stringToUint8Array(`\r\n--${boundary}\r\n`, "utf-8"),
    ]),
    // end with --
    stringToUint8Array("--", "utf-8"),
  ].map(toStream);

  return concatenateStreams(streams);
}

export function isMultipartRequestBody(
  body: RequestBodyType | null | undefined
): body is MultipartRequestBody {
  return (
    body !== null &&
    body !== undefined &&
    typeof body === "object" &&
    Object.prototype.hasOwnProperty.call(body, "parts")
  );
}

export function multipartPolicy(): PipelinePolicy {
  return {
    name: multipartPolicyName,
    sendRequest(request, next) {
      if (!isMultipartRequestBody(request.body)) {
        return next(request);
      }

      let boundary = request.body.boundary;

      const contentTypeHeader = request.headers.get("Content-Type");
      if (contentTypeHeader) {
        const parsedHeader = contentTypeHeader.match(/^(multipart\/[^ ;]+)(; *boundary=(.+))?$/);
        if (!parsedHeader) {
          throw new Error(
            `Got multipart request body, but content-type header was not multipart: ${contentTypeHeader}`
          );
        }

        const parsedContentType = parsedHeader[1];
        const parsedBoundary = parsedHeader[3];

        if (parsedBoundary) {
          if (boundary && boundary !== parsedBoundary) {
            throw new Error(
              `Multipart boundary was specified as ${parsedBoundary} in the header, but got ${boundary} in the request body`
            );
          } else {
            boundary = parsedBoundary;
          }
        } else {
          boundary ??= generateBoundary();
          request.headers.set("Content-Type", `${parsedContentType}; boundary=${boundary}`);
        }
      } else {
        boundary ??= generateBoundary();
        request.headers.set("Content-Type", `multipart/mixed; boundary=${boundary}`);
      }

      request.body = createBodyStream(request.body.parts, boundary);

      return next(request);
    },
  };
}
