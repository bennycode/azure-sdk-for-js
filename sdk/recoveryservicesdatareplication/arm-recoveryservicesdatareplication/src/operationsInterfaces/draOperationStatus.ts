/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  DraOperationStatusGetOptionalParams,
  DraOperationStatusGetResponse
} from "../models";

/** Interface representing a DraOperationStatus. */
export interface DraOperationStatus {
  /**
   * Tracks the results of an asynchronous operation on the fabric agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fabricName The fabric name.
   * @param fabricAgentName The fabric agent (Dra) name.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fabricName: string,
    fabricAgentName: string,
    operationId: string,
    options?: DraOperationStatusGetOptionalParams
  ): Promise<DraOperationStatusGetResponse>;
}
