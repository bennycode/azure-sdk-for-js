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
import * as Mappers from "../models/componentCurrentBillingFeaturesMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a ComponentCurrentBillingFeatures. */
export class ComponentCurrentBillingFeatures {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a ComponentCurrentBillingFeatures.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns current billing features for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentCurrentBillingFeaturesGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentCurrentBillingFeaturesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): Promise<Models.ComponentCurrentBillingFeaturesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComponentCurrentBillingFeaturesGetResponse>;
  }

  /**
   * Update current billing features for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param billingFeaturesProperties Properties that need to be specified to update billing features
   * for an Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentCurrentBillingFeaturesUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, billingFeaturesProperties: Models.ApplicationInsightsComponentBillingFeatures, options?: msRest.RequestOptionsBase): Promise<Models.ComponentCurrentBillingFeaturesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param billingFeaturesProperties Properties that need to be specified to update billing features
   * for an Application Insights component.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, billingFeaturesProperties: Models.ApplicationInsightsComponentBillingFeatures, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param billingFeaturesProperties Properties that need to be specified to update billing features
   * for an Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, billingFeaturesProperties: Models.ApplicationInsightsComponentBillingFeatures, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): void;
  update(resourceGroupName: string, resourceName: string, billingFeaturesProperties: Models.ApplicationInsightsComponentBillingFeatures, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentBillingFeatures>): Promise<Models.ComponentCurrentBillingFeaturesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        billingFeaturesProperties,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ComponentCurrentBillingFeaturesUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/currentbillingfeatures",
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
      bodyMapper: Mappers.ApplicationInsightsComponentBillingFeatures
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/currentbillingfeatures",
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
    parameterPath: "billingFeaturesProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponentBillingFeatures,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentBillingFeatures
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
