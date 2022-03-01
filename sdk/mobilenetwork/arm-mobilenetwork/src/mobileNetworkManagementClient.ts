/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  AttachedDataNetworksImpl,
  DataNetworksImpl,
  MobileNetworksImpl,
  SitesImpl,
  SimsImpl,
  OperationsImpl,
  PacketCoreControlPlanesImpl,
  PacketCoreDataPlanesImpl,
  ServicesImpl,
  SimPoliciesImpl,
  SlicesImpl
} from "./operations";
import {
  AttachedDataNetworks,
  DataNetworks,
  MobileNetworks,
  Sites,
  Sims,
  Operations,
  PacketCoreControlPlanes,
  PacketCoreDataPlanes,
  Services,
  SimPolicies,
  Slices
} from "./operationsInterfaces";
import { MobileNetworkManagementClientOptionalParams } from "./models";

export class MobileNetworkManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the MobileNetworkManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MobileNetworkManagementClientOptionalParams
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
    const defaults: MobileNetworkManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-mobilenetwork/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-01-01-preview";
    this.attachedDataNetworks = new AttachedDataNetworksImpl(this);
    this.dataNetworks = new DataNetworksImpl(this);
    this.mobileNetworks = new MobileNetworksImpl(this);
    this.sites = new SitesImpl(this);
    this.sims = new SimsImpl(this);
    this.operations = new OperationsImpl(this);
    this.packetCoreControlPlanes = new PacketCoreControlPlanesImpl(this);
    this.packetCoreDataPlanes = new PacketCoreDataPlanesImpl(this);
    this.services = new ServicesImpl(this);
    this.simPolicies = new SimPoliciesImpl(this);
    this.slices = new SlicesImpl(this);
  }

  attachedDataNetworks: AttachedDataNetworks;
  dataNetworks: DataNetworks;
  mobileNetworks: MobileNetworks;
  sites: Sites;
  sims: Sims;
  operations: Operations;
  packetCoreControlPlanes: PacketCoreControlPlanes;
  packetCoreDataPlanes: PacketCoreDataPlanes;
  services: Services;
  simPolicies: SimPolicies;
  slices: Slices;
}
