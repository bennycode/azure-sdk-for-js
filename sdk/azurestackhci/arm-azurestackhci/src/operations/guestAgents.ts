/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GuestAgents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureStackHCIClient } from "../azureStackHCIClient";
import {
  GuestAgent,
  GuestAgentsListNextOptionalParams,
  GuestAgentsListOptionalParams,
  GuestAgentsListResponse,
  GuestAgentsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GuestAgents operations. */
export class GuestAgentsImpl implements GuestAgents {
  private readonly client: AzureStackHCIClient;

  /**
   * Initialize a new instance of the class GuestAgents class.
   * @param client Reference to the service client
   */
  constructor(client: AzureStackHCIClient) {
    this.client = client;
  }

  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: GuestAgentsListOptionalParams
  ): PagedAsyncIterableIterator<GuestAgent> {
    const iter = this.listPagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(resourceUri, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: GuestAgentsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GuestAgent[]> {
    let result: GuestAgentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: GuestAgentsListOptionalParams
  ): AsyncIterableIterator<GuestAgent> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: GuestAgentsListOptionalParams
  ): Promise<GuestAgentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: GuestAgentsListNextOptionalParams
  ): Promise<GuestAgentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgentList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgentList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceUri
  ],
  headerParameters: [Parameters.accept],
  serializer
};
