/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VMInstanceGuestAgents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureArcVMwareManagementServiceAPI } from "../azureArcVMwareManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  GuestAgent,
  VMInstanceGuestAgentsListNextOptionalParams,
  VMInstanceGuestAgentsListOptionalParams,
  VMInstanceGuestAgentsListResponse,
  VMInstanceGuestAgentsCreateOptionalParams,
  VMInstanceGuestAgentsCreateResponse,
  VMInstanceGuestAgentsGetOptionalParams,
  VMInstanceGuestAgentsGetResponse,
  VMInstanceGuestAgentsDeleteOptionalParams,
  VMInstanceGuestAgentsDeleteResponse,
  VMInstanceGuestAgentsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VMInstanceGuestAgents operations. */
export class VMInstanceGuestAgentsImpl implements VMInstanceGuestAgents {
  private readonly client: AzureArcVMwareManagementServiceAPI;

  /**
   * Initialize a new instance of the class VMInstanceGuestAgents class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcVMwareManagementServiceAPI) {
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
    options?: VMInstanceGuestAgentsListOptionalParams
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
    options?: VMInstanceGuestAgentsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GuestAgent[]> {
    let result: VMInstanceGuestAgentsListResponse;
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
    options?: VMInstanceGuestAgentsListOptionalParams
  ): AsyncIterableIterator<GuestAgent> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceUri: string,
    options?: VMInstanceGuestAgentsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VMInstanceGuestAgentsCreateResponse>,
      VMInstanceGuestAgentsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VMInstanceGuestAgentsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      VMInstanceGuestAgentsCreateResponse,
      OperationState<VMInstanceGuestAgentsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceUri: string,
    options?: VMInstanceGuestAgentsCreateOptionalParams
  ): Promise<VMInstanceGuestAgentsCreateResponse> {
    const poller = await this.beginCreate(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * Implements GuestAgent GET method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    options?: VMInstanceGuestAgentsGetOptionalParams
  ): Promise<VMInstanceGuestAgentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getOperationSpec
    );
  }

  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceUri: string,
    options?: VMInstanceGuestAgentsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VMInstanceGuestAgentsDeleteResponse>,
      VMInstanceGuestAgentsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VMInstanceGuestAgentsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      VMInstanceGuestAgentsDeleteResponse,
      OperationState<VMInstanceGuestAgentsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceUri: string,
    options?: VMInstanceGuestAgentsDeleteOptionalParams
  ): Promise<VMInstanceGuestAgentsDeleteResponse> {
    const poller = await this.beginDelete(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * Returns the list of GuestAgent of the given vm.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: VMInstanceGuestAgentsListOptionalParams
  ): Promise<VMInstanceGuestAgentsListResponse> {
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
    options?: VMInstanceGuestAgentsListNextOptionalParams
  ): Promise<VMInstanceGuestAgentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgent
    },
    201: {
      bodyMapper: Mappers.GuestAgent
    },
    202: {
      bodyMapper: Mappers.GuestAgent
    },
    204: {
      bodyMapper: Mappers.GuestAgent
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestAgent
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
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.VMInstanceGuestAgentsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.VMInstanceGuestAgentsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.VMInstanceGuestAgentsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.VMInstanceGuestAgentsDeleteHeaders
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
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents",
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
