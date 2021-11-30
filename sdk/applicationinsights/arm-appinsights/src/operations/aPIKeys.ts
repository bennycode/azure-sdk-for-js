/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/aPIKeysMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a APIKeys. */
export class APIKeys {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a APIKeys.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of API keys of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.APIKeysListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.APIKeysListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKeyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKeyListResult>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKeyListResult>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKeyListResult>): Promise<Models.APIKeysListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.APIKeysListResponse>;
  }

  /**
   * Create an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param aPIKeyProperties Properties that need to be specified to create an API key of a
   * Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.APIKeysCreateResponse>
   */
  create(resourceGroupName: string, resourceName: string, aPIKeyProperties: Models.APIKeyRequest, options?: msRest.RequestOptionsBase): Promise<Models.APIKeysCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param aPIKeyProperties Properties that need to be specified to create an API key of a
   * Application Insights component.
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, aPIKeyProperties: Models.APIKeyRequest, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param aPIKeyProperties Properties that need to be specified to create an API key of a
   * Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, aPIKeyProperties: Models.APIKeyRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  create(resourceGroupName: string, resourceName: string, aPIKeyProperties: Models.APIKeyRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): Promise<Models.APIKeysCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        aPIKeyProperties,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.APIKeysCreateResponse>;
  }

  /**
   * Delete an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.APIKeysDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, keyId: string, options?: msRest.RequestOptionsBase): Promise<Models.APIKeysDeleteMethodResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, keyId: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, keyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, keyId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): Promise<Models.APIKeysDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        keyId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.APIKeysDeleteMethodResponse>;
  }

  /**
   * Get the API Key for this key id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.APIKeysGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, keyId: string, options?: msRest.RequestOptionsBase): Promise<Models.APIKeysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, keyId: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, keyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): void;
  get(resourceGroupName: string, resourceName: string, keyId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAPIKey>): Promise<Models.APIKeysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        keyId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.APIKeysGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "aPIKeyProperties",
    mapper: {
      ...Mappers.APIKeyRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.keyId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.keyId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
