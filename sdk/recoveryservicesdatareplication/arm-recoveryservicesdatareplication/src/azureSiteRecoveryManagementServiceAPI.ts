/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  DraImpl,
  DraOperationStatusImpl,
  EmailConfigurationImpl,
  EventImpl,
  FabricImpl,
  FabricOperationsStatusImpl,
  PolicyImpl,
  PolicyOperationStatusImpl,
  ProtectedItemImpl,
  ProtectedItemOperationStatusImpl,
  RecoveryPointsImpl,
  ReplicationExtensionImpl,
  ReplicationExtensionOperationStatusImpl,
  OperationsImpl,
  VaultImpl,
  VaultOperationStatusImpl,
  WorkflowImpl,
  WorkflowOperationStatusImpl
} from "./operations";
import {
  Dra,
  DraOperationStatus,
  EmailConfiguration,
  Event,
  Fabric,
  FabricOperationsStatus,
  Policy,
  PolicyOperationStatus,
  ProtectedItem,
  ProtectedItemOperationStatus,
  RecoveryPoints,
  ReplicationExtension,
  ReplicationExtensionOperationStatus,
  Operations,
  Vault,
  VaultOperationStatus,
  Workflow,
  WorkflowOperationStatus
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  AzureSiteRecoveryManagementServiceAPIOptionalParams,
  CheckNameAvailabilityOptionalParams,
  CheckNameAvailabilityResponse,
  DeploymentPreflightOptionalParams,
  DeploymentPreflightResponse
} from "./models";

export class AzureSiteRecoveryManagementServiceAPI extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureSiteRecoveryManagementServiceAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureSiteRecoveryManagementServiceAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureSiteRecoveryManagementServiceAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-recoveryservicesdatareplication/1.0.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-02-16-preview";
    this.dra = new DraImpl(this);
    this.draOperationStatus = new DraOperationStatusImpl(this);
    this.emailConfiguration = new EmailConfigurationImpl(this);
    this.event = new EventImpl(this);
    this.fabric = new FabricImpl(this);
    this.fabricOperationsStatus = new FabricOperationsStatusImpl(this);
    this.policy = new PolicyImpl(this);
    this.policyOperationStatus = new PolicyOperationStatusImpl(this);
    this.protectedItem = new ProtectedItemImpl(this);
    this.protectedItemOperationStatus = new ProtectedItemOperationStatusImpl(
      this
    );
    this.recoveryPoints = new RecoveryPointsImpl(this);
    this.replicationExtension = new ReplicationExtensionImpl(this);
    this.replicationExtensionOperationStatus = new ReplicationExtensionOperationStatusImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.vault = new VaultImpl(this);
    this.vaultOperationStatus = new VaultOperationStatusImpl(this);
    this.workflow = new WorkflowImpl(this);
    this.workflowOperationStatus = new WorkflowOperationStatusImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Checks the resource name availability.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    options?: CheckNameAvailabilityOptionalParams
  ): Promise<CheckNameAvailabilityResponse> {
    return this.sendOperationRequest(
      { location, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Performs resource deployment validation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentId Deployment Id.
   * @param options The options parameters.
   */
  deploymentPreflight(
    resourceGroupName: string,
    deploymentId: string,
    options?: DeploymentPreflightOptionalParams
  ): Promise<DeploymentPreflightResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, deploymentId, options },
      deploymentPreflightOperationSpec
    );
  }

  dra: Dra;
  draOperationStatus: DraOperationStatus;
  emailConfiguration: EmailConfiguration;
  event: Event;
  fabric: Fabric;
  fabricOperationsStatus: FabricOperationsStatus;
  policy: Policy;
  policyOperationStatus: PolicyOperationStatus;
  protectedItem: ProtectedItem;
  protectedItemOperationStatus: ProtectedItemOperationStatus;
  recoveryPoints: RecoveryPoints;
  replicationExtension: ReplicationExtension;
  replicationExtensionOperationStatus: ReplicationExtensionOperationStatus;
  operations: Operations;
  vault: Vault;
  vaultOperationStatus: VaultOperationStatus;
  workflow: Workflow;
  workflowOperationStatus: WorkflowOperationStatus;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataReplication/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponseModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deploymentPreflightOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/deployments/{deploymentId}/preflight",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentPreflightModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
