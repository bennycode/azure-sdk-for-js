/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DiagnosticsCreateOptionalParams,
  DiagnosticsCreateResponse,
  DiagnosticsGetOptionalParams,
  DiagnosticsGetResponse
} from "../models";

/** Interface representing a Diagnostics. */
export interface Diagnostics {
  /**
   * Creates a diagnostic for the specific resource using solutionId and requiredInputs* from discovery
   * solutions. <br/>Diagnostics tells you precisely the root cause of the issue and the steps to address
   * it. You can get diagnostics once you discover the relevant solution for your Azure issue. <br/><br/>
   * <b>Note: </b> requiredInputs’ from Discovery solutions response must be passed via
   * ‘additionalParameters’ as an input to Diagnostics API.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  beginCreate(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DiagnosticsCreateResponse>,
      DiagnosticsCreateResponse
    >
  >;
  /**
   * Creates a diagnostic for the specific resource using solutionId and requiredInputs* from discovery
   * solutions. <br/>Diagnostics tells you precisely the root cause of the issue and the steps to address
   * it. You can get diagnostics once you discover the relevant solution for your Azure issue. <br/><br/>
   * <b>Note: </b> requiredInputs’ from Discovery solutions response must be passed via
   * ‘additionalParameters’ as an input to Diagnostics API.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  beginCreateAndWait(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsCreateOptionalParams
  ): Promise<DiagnosticsCreateResponse>;
  /**
   * Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  get(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsGetOptionalParams
  ): Promise<DiagnosticsGetResponse>;
}
