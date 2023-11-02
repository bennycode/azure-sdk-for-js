/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** Response for whether the requested resource name is available or not. */
export interface CheckNameAvailabilityResponse {
  /** Returns true or false depending on the availability of the name */
  nameAvailable?: boolean;
  /** Reason for why value is not available. This field is returned if nameAvailable is false. */
  reason?: string;
  /** Gets an error message explaining the 'reason' value with more details. This field is returned iif nameAvailable is false. */
  message?: string;
}

/** Solution Invocation with additional params needed for invocation. */
export interface DiagnosticInvocation {
  /** Solution Id to invoke. */
  solutionId?: string;
  /** Additional parameters required to invoke the solutionId. */
  additionalParameters?: { [propertyName: string]: string };
}

/** Properties returned with in an insight. */
export interface Diagnostic {
  /** Solution Id */
  solutionId?: string;
  /** Denotes the status of the diagnostic resource. */
  status?: Status;
  /** The problems (if any) detected by this insight. */
  insights?: Insight[];
  /** Error definition. */
  error?: ErrorModel;
}

/** Detailed insights(s) obtained via the invocation of an insight diagnostic */
export interface Insight {
  /** Article id. */
  id?: string;
  /** This insight's title. */
  title?: string;
  /** Detailed result content. */
  results?: string;
  /** Importance level of the insight. */
  importanceLevel?: ImportanceLevel;
}

/** Error definition. */
export interface ErrorModel {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Service specific error type which serves as additional context for the error herein.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Description of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** An array of additional nested error response info objects, as described by this contract. */
  details?: ErrorModel[];
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Discovery response. */
export interface DiscoveryResponse {
  /** The list of metadata. */
  value?: SolutionMetadataResource[];
  /** The link used to get the next page of solution metadata. */
  nextLink?: string;
}

/** Metadata Properties */
export interface SolutionMetadataProperties {
  /** Solution Id. */
  solutionId?: string;
  /**
   * Solution Type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly solutionType?: SolutionType;
  /**
   * A detailed description of solution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * Required parameters for invoking this particular solution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredInputs?: string[];
}

/** Solution response. */
export interface SolutionResource {
  /**
   * Full resource uri of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Type of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Solution result */
  properties?: SolutionResourceProperties;
}

/** Solution result */
export interface SolutionResourceProperties {
  /** Solution request trigger criteria */
  triggerCriteria?: TriggerCriterion[];
  /** Client input parameters to run Solution */
  parameters?: { [propertyName: string]: string };
  /** Solution Id to identify single solution. */
  solutionId?: string;
  /** Status of solution provisioning. */
  provisioningState?: SolutionProvisioningState;
  /** The title. */
  title?: string;
  /** The HTML content that needs to be rendered and shown to customer. */
  content?: string;
  /** Solution replacement maps. */
  replacementMaps?: ReplacementMaps;
  /** List of section object. */
  sections?: Section[];
}

/** Solution request trigger criterion. SolutionId/ProblemClassificationId is the only supported trigger type for Solution PUT request. ReplacementKey is the only supported trigger type for Solution PATCH request. */
export interface TriggerCriterion {
  /** Trigger criterion name. */
  name?: Name;
  /** Trigger criterion value. */
  value?: string;
}

/** Solution replacement maps. */
export interface ReplacementMaps {
  /** Solution AzureKB results */
  webResults?: WebResult[];
  /** Solution diagnostics results. */
  diagnostics?: SolutionsDiagnostic[];
  /** Solutions Troubleshooters */
  troubleshooters?: SolutionsTroubleshooters[];
  /** Solution metrics based charts */
  metricsBasedCharts?: MetricsBasedChart[];
  /** Video solutions, which have the power to engage the customer by stimulating their senses */
  videos?: Video[];
  /** Group of Videos */
  videoGroups?: VideoGroup[];
}

/** AzureKB web result */
export interface WebResult {
  /** Place holder used in HTML Content replace control with the content */
  replacementKey?: string;
  /** AzureKB search results */
  searchResults?: SearchResult[];
}

/** Details of an AzureKB search result. */
export interface SearchResult {
  /** Unique id of the result. */
  solutionId?: string;
  /** Content of the search result. */
  content?: string;
  /** Title of the search result. */
  title?: string;
  /** Confidence of the search result. */
  confidence?: Confidence;
  /** Source of the search result. */
  source?: string;
  /** Result type of the search result. */
  resultType?: ResultType;
  /** rank of the search result */
  rank?: number;
  /** Link to the document. */
  link?: string;
}

/** Solutions Diagnostic */
export interface SolutionsDiagnostic {
  /** Solution Id to identify single Solutions Diagnostic */
  solutionId?: string;
  /** Denotes the status of the diagnostic resource. */
  status?: Status;
  /** Details of the status */
  statusDetails?: string;
  /** Place holder used in HTML Content replace control with the content */
  replacementKey?: string;
  /** Required parameters of this item */
  requiredParameters?: string[];
  /** Diagnostic insights */
  insights?: Insight[];
}

/** Troubleshooters in Solutions */
export interface SolutionsTroubleshooters {
  /** Solution Id to identify single Solutions Troubleshooter */
  solutionId?: string;
  /** Troubleshooter title */
  title?: string;
  /** Troubleshooter summary */
  summary?: string;
}

/** Solutions metrics based chart */
export interface MetricsBasedChart {
  /** Chart name */
  name?: string;
  /** Allowed values are Sum, Avg, Count, Min, Max. Default is Sum */
  aggregationType?: AggregationType;
  /** Time span duration */
  timeSpanDuration?: string;
  /** Chart title */
  title?: string;
  /** Filter group */
  filterGroup?: FilterGroup;
  /** Place holder used in HTML Content replace control with the content */
  replacementKey?: string;
}

/** Filter group */
export interface FilterGroup {
  /** List of filters */
  filter?: Filter[];
}

/** Filter criterion */
export interface Filter {
  /** Filter name */
  name?: string;
  /** Filter values */
  values?: string;
  /** Filter operator */
  operator?: string;
}

/** VideoGroup video detail */
export interface VideoGroupVideo {
  /** Link to the video */
  src?: string;
  /** Title of the video */
  title?: string;
}

/** Video group detail */
export interface VideoGroup {
  /** List of videos will be shown to customers */
  videos?: VideoGroupVideo[];
  /** Place holder used in HTML Content replace control with the insight content */
  replacementKey?: string;
}

/** Part of the solution and are dividers in the solution rendering. */
export interface Section {
  /** Solution sections title. */
  title?: string;
  /** Solution sections content. */
  content?: string;
  /** Solution replacement maps. */
  replacementMaps?: ReplacementMaps;
}

/** Solution response. */
export interface SolutionPatchRequestBody {
  /** Solution result */
  properties?: SolutionResourceProperties;
}

/** Troubleshooter step */
export interface Step {
  /** Unique step id. */
  id?: string;
  /** Step title. */
  title?: string;
  /** Step description. */
  description?: string;
  /** Get or sets the Step guidance. */
  guidance?: string;
  /** Status of Troubleshooter Step execution. */
  executionStatus?: ExecutionStatus;
  /** This field has more detailed status description of the execution status. */
  executionStatusDescription?: string;
  /** Type of Troubleshooting step. */
  type?: Type;
  /** is this last step of the workflow. */
  isLastStep?: boolean;
  inputs?: StepInput[];
  /** Only for AutomatedStep type */
  automatedCheckResults?: AutomatedCheckResult;
  insights?: Insight[];
  /** The error detail. */
  error?: ErrorDetail;
}

/** Details of step input. */
export interface StepInput {
  /** Use Index as QuestionId. */
  questionId?: string;
  /** Text Input. Will be a single line input. */
  questionType?: string;
  /** User question content. */
  questionContent?: string;
  /** Default is Text. */
  questionContentType?: QuestionContentType;
  /** Place holder text for response hints. */
  responseHint?: string;
  /** Result of Automate step. */
  recommendedOption?: string;
  /** Text of response that was selected. */
  selectedOptionValue?: string;
  /** Troubleshooter step input response validation properties */
  responseValidationProperties?: ResponseValidationProperties;
  responseOptions?: ResponseOption[];
}

/** Troubleshooter step input response validation properties */
export interface ResponseValidationProperties {
  /** Regex used for the input validation. */
  regex?: string;
  /** Default True */
  isRequired?: boolean;
  /** Validation Error Message. */
  validationErrorMessage?: string;
  /** Max text input (open Ended Text). */
  maxLength?: number;
}

/** The status of the resource. */
export interface ResponseOption {
  /** Unique string. */
  key?: string;
  /** Option description */
  value?: string;
}

/** Only for AutomatedStep type */
export interface AutomatedCheckResult {
  /** Insight Article Content */
  result?: string;
  /** Type of Result. */
  type?: AutomatedCheckResultType;
}

/** Troubleshooter ContinueRequest body. */
export interface ContinueRequestBody {
  /** Unique id of the result. */
  stepId?: string;
  responses?: TroubleshooterResponse[];
}

/** User Response for Troubleshooter continue request */
export interface TroubleshooterResponse {
  /** id of the question. */
  questionId?: string;
  /** Text Input. Will be a single line input. */
  questionType?: QuestionType;
  /** Response key for SingleInput. For Multi-line test/open ended question it is free form text */
  response?: string;
}

/** Troubleshooter restart response */
export interface RestartTroubleshooterResponse {
  /**
   * Updated TroubleshooterResource Name .
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly troubleshooterResourceName?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Video detail */
export interface Video extends VideoGroupVideo {
  /** Place holder used in HTML Content replace control with the insight content */
  replacementKey?: string;
}

/** Diagnostic resource */
export interface DiagnosticResource extends ProxyResource {
  /** Global parameters that can be passed to all solutionIds. */
  globalParameters?: { [propertyName: string]: string };
  /** SolutionIds that are needed to be invoked. */
  insights?: DiagnosticInvocation[];
  /**
   * Diagnostic Request Accepted time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly acceptedAt?: string;
  /**
   * Status of diagnostic provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: DiagnosticProvisioningState;
  /**
   * Array of Diagnostics.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly diagnostics?: Diagnostic[];
}

/** Metadata resource */
export interface SolutionMetadataResource extends ProxyResource {
  /** List of metadata. */
  solutions?: SolutionMetadataProperties[];
}

/** Troubleshooter response. */
export interface TroubleshooterResource extends ProxyResource {
  /** Solution Id to identify single troubleshooter. */
  solutionId?: string;
  /** Client input parameters to run Troubleshooter Resource */
  parameters?: { [propertyName: string]: string };
  /**
   * Status of troubleshooter provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: TroubleshooterProvisioningState;
  /**
   * List of step object.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly steps?: Step[];
}

/** Defines headers for Solution_update operation. */
export interface SolutionUpdateHeaders {
  location?: string;
}

/** Defines headers for Troubleshooters_continue operation. */
export interface TroubleshootersContinueHeaders {
  location?: string;
}

/** Defines headers for Troubleshooters_end operation. */
export interface TroubleshootersEndHeaders {
  location?: string;
}

/** Defines headers for Troubleshooters_restart operation. */
export interface TroubleshootersRestartHeaders {
  location?: string;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link DiagnosticProvisioningState} that the service accepts. */
export enum KnownDiagnosticProvisioningState {
  /** All Diagnostics in the Batch succeeded. */
  Succeeded = "Succeeded",
  /** Some Diagnostics are still running or failed. */
  PartialComplete = "PartialComplete",
  /** All Diagnostics failed to run. */
  Failed = "Failed",
  /** When Diagnostic request gets canceled. */
  Canceled = "Canceled"
}

/**
 * Defines values for DiagnosticProvisioningState. \
 * {@link KnownDiagnosticProvisioningState} can be used interchangeably with DiagnosticProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: All Diagnostics in the Batch succeeded. \
 * **PartialComplete**: Some Diagnostics are still running or failed. \
 * **Failed**: All Diagnostics failed to run. \
 * **Canceled**: When Diagnostic request gets canceled.
 */
export type DiagnosticProvisioningState = string;

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  /** Diagnostic creation failed. */
  Failed = "Failed",
  /** Request is missing required inputs to run. */
  MissingInputs = "MissingInputs",
  /** Diagnostic is still running. */
  Running = "Running",
  /** Diagnostic creation succeeded. */
  Succeeded = "Succeeded",
  /** Diagnostic was timed out. */
  Timeout = "Timeout"
}

/**
 * Defines values for Status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Failed**: Diagnostic creation failed. \
 * **MissingInputs**: Request is missing required inputs to run. \
 * **Running**: Diagnostic is still running. \
 * **Succeeded**: Diagnostic creation succeeded. \
 * **Timeout**: Diagnostic was timed out.
 */
export type Status = string;

/** Known values of {@link ImportanceLevel} that the service accepts. */
export enum KnownImportanceLevel {
  /** A critical insight has been found after running the diagnostic. */
  Critical = "Critical",
  /** A warning insight has been found after running the diagnostic. */
  Warning = "Warning",
  /** An information insight has been found after running the diagnostic. */
  Information = "Information"
}

/**
 * Defines values for ImportanceLevel. \
 * {@link KnownImportanceLevel} can be used interchangeably with ImportanceLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Critical**: A critical insight has been found after running the diagnostic. \
 * **Warning**: A warning insight has been found after running the diagnostic. \
 * **Information**: An information insight has been found after running the diagnostic.
 */
export type ImportanceLevel = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link SolutionType} that the service accepts. */
export enum KnownSolutionType {
  /** Diagnostics resource type. */
  Diagnostics = "Diagnostics",
  /** Solutions resource type. */
  Solutions = "Solutions"
}

/**
 * Defines values for SolutionType. \
 * {@link KnownSolutionType} can be used interchangeably with SolutionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Diagnostics**: Diagnostics resource type. \
 * **Solutions**: Solutions resource type.
 */
export type SolutionType = string;

/** Known values of {@link Name} that the service accepts. */
export enum KnownName {
  /** SolutionId */
  SolutionId = "SolutionId",
  /** ProblemClassificationId */
  ProblemClassificationId = "ProblemClassificationId",
  /** ReplacementKey */
  ReplacementKey = "ReplacementKey"
}

/**
 * Defines values for Name. \
 * {@link KnownName} can be used interchangeably with Name,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SolutionId** \
 * **ProblemClassificationId** \
 * **ReplacementKey**
 */
export type Name = string;

/** Known values of {@link SolutionProvisioningState} that the service accepts. */
export enum KnownSolutionProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for SolutionProvisioningState. \
 * {@link KnownSolutionProvisioningState} can be used interchangeably with SolutionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type SolutionProvisioningState = string;

/** Known values of {@link Confidence} that the service accepts. */
export enum KnownConfidence {
  /** Low */
  Low = "Low",
  /** Medium */
  Medium = "Medium",
  /** High */
  High = "High"
}

/**
 * Defines values for Confidence. \
 * {@link KnownConfidence} can be used interchangeably with Confidence,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Low** \
 * **Medium** \
 * **High**
 */
export type Confidence = string;

/** Known values of {@link ResultType} that the service accepts. */
export enum KnownResultType {
  /** Community */
  Community = "Community",
  /** Documentation */
  Documentation = "Documentation"
}

/**
 * Defines values for ResultType. \
 * {@link KnownResultType} can be used interchangeably with ResultType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Community** \
 * **Documentation**
 */
export type ResultType = string;

/** Known values of {@link AggregationType} that the service accepts. */
export enum KnownAggregationType {
  /** Sum */
  Sum = "Sum",
  /** Avg */
  Avg = "Avg",
  /** Count */
  Count = "Count",
  /** Min */
  Min = "Min",
  /** Max */
  Max = "Max"
}

/**
 * Defines values for AggregationType. \
 * {@link KnownAggregationType} can be used interchangeably with AggregationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Sum** \
 * **Avg** \
 * **Count** \
 * **Min** \
 * **Max**
 */
export type AggregationType = string;

/** Known values of {@link TroubleshooterProvisioningState} that the service accepts. */
export enum KnownTroubleshooterProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Running */
  Running = "Running",
  /** AutoContinue */
  AutoContinue = "AutoContinue"
}

/**
 * Defines values for TroubleshooterProvisioningState. \
 * {@link KnownTroubleshooterProvisioningState} can be used interchangeably with TroubleshooterProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Running** \
 * **AutoContinue**
 */
export type TroubleshooterProvisioningState = string;

/** Known values of {@link ExecutionStatus} that the service accepts. */
export enum KnownExecutionStatus {
  /** Success */
  Success = "Success",
  /** Running */
  Running = "Running",
  /** Failed */
  Failed = "Failed",
  /** Warning */
  Warning = "Warning"
}

/**
 * Defines values for ExecutionStatus. \
 * {@link KnownExecutionStatus} can be used interchangeably with ExecutionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Success** \
 * **Running** \
 * **Failed** \
 * **Warning**
 */
export type ExecutionStatus = string;

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  /** Decision */
  Decision = "Decision",
  /** Solution */
  Solution = "Solution",
  /** Insight */
  Insight = "Insight",
  /** AutomatedCheck */
  AutomatedCheck = "AutomatedCheck"
}

/**
 * Defines values for Type. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Decision** \
 * **Solution** \
 * **Insight** \
 * **AutomatedCheck**
 */
export type Type = string;

/** Known values of {@link QuestionContentType} that the service accepts. */
export enum KnownQuestionContentType {
  /** Text */
  Text = "Text",
  /** Html */
  Html = "Html",
  /** Markdown */
  Markdown = "Markdown"
}

/**
 * Defines values for QuestionContentType. \
 * {@link KnownQuestionContentType} can be used interchangeably with QuestionContentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Text** \
 * **Html** \
 * **Markdown**
 */
export type QuestionContentType = string;

/** Known values of {@link AutomatedCheckResultType} that the service accepts. */
export enum KnownAutomatedCheckResultType {
  /** Success */
  Success = "Success",
  /** Warning */
  Warning = "Warning",
  /** Error */
  Error = "Error",
  /** Information */
  Information = "Information"
}

/**
 * Defines values for AutomatedCheckResultType. \
 * {@link KnownAutomatedCheckResultType} can be used interchangeably with AutomatedCheckResultType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Success** \
 * **Warning** \
 * **Error** \
 * **Information**
 */
export type AutomatedCheckResultType = string;

/** Known values of {@link QuestionType} that the service accepts. */
export enum KnownQuestionType {
  /** SingleChoice radio button */
  RadioButton = "RadioButton",
  /** SingleChoice dropdown. */
  Dropdown = "Dropdown",
  /** Text Input */
  TextInput = "TextInput",
  /** MultiLineInfoBox */
  MultiLineInfoBox = "MultiLineInfoBox"
}

/**
 * Defines values for QuestionType. \
 * {@link KnownQuestionType} can be used interchangeably with QuestionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RadioButton**: SingleChoice radio button \
 * **Dropdown**: SingleChoice dropdown. \
 * **TextInput**: Text Input \
 * **MultiLineInfoBox**: MultiLineInfoBox
 */
export type QuestionType = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface CheckNameAvailabilityPostOptionalParams
  extends coreClient.OperationOptions {
  /** The required parameters for availability check. */
  checkNameAvailabilityRequest?: CheckNameAvailabilityRequest;
}

/** Contains response data for the post operation. */
export type CheckNameAvailabilityPostResponse = CheckNameAvailabilityResponse;

/** Optional parameters. */
export interface DiagnosticsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** The required request body for this insightResource invocation. */
  diagnosticResourceRequest?: DiagnosticResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type DiagnosticsCreateResponse = DiagnosticResource;

/** Optional parameters. */
export interface DiagnosticsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DiagnosticsGetResponse = DiagnosticResource;

/** Optional parameters. */
export interface DiscoverySolutionListOptionalParams
  extends coreClient.OperationOptions {
  /** 'ProblemClassificationId' or 'Id' is a mandatory filter to get solutions ids. It also supports optional 'ResourceType' and 'SolutionType' filters. The filter supports only 'and', 'or' and 'eq' operators. Example: $filter=ProblemClassificationId eq '1ddda5b4-cf6c-4d4f-91ad-bc38ab0e811e' */
  filter?: string;
  /** Skiptoken is only used if a previous operation returned a partial result. */
  skiptoken?: string;
}

/** Contains response data for the list operation. */
export type DiscoverySolutionListResponse = DiscoveryResponse;

/** Optional parameters. */
export interface DiscoverySolutionListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DiscoverySolutionListNextResponse = DiscoveryResponse;

/** Optional parameters. */
export interface SolutionCreateOptionalParams
  extends coreClient.OperationOptions {
  /** The required request body for this solution resource creation. */
  solutionRequestBody?: SolutionResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type SolutionCreateResponse = SolutionResource;

/** Optional parameters. */
export interface SolutionGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SolutionGetResponse = SolutionResource;

/** Optional parameters. */
export interface SolutionUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The required request body for updating a solution resource. */
  solutionPatchRequestBody?: SolutionPatchRequestBody;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type SolutionUpdateResponse = SolutionUpdateHeaders & SolutionResource;

/** Optional parameters. */
export interface TroubleshootersCreateOptionalParams
  extends coreClient.OperationOptions {
  /** The required request body for this Troubleshooter resource creation. */
  createTroubleshooterRequestBody?: TroubleshooterResource;
}

/** Contains response data for the create operation. */
export type TroubleshootersCreateResponse = TroubleshooterResource;

/** Optional parameters. */
export interface TroubleshootersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TroubleshootersGetResponse = TroubleshooterResource;

/** Optional parameters. */
export interface TroubleshootersContinueOptionalParams
  extends coreClient.OperationOptions {
  /** The required request body for going to next step in Troubleshooter resource. */
  continueRequestBody?: ContinueRequestBody;
}

/** Contains response data for the continue operation. */
export type TroubleshootersContinueResponse = TroubleshootersContinueHeaders;

/** Optional parameters. */
export interface TroubleshootersEndOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the end operation. */
export type TroubleshootersEndResponse = TroubleshootersEndHeaders;

/** Optional parameters. */
export interface TroubleshootersRestartOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the restart operation. */
export type TroubleshootersRestartResponse = TroubleshootersRestartHeaders &
  RestartTroubleshooterResponse;

/** Optional parameters. */
export interface HelpRPOptionalParams extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
