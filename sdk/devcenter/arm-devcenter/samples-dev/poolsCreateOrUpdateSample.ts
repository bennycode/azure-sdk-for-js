/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Pool, DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a machine pool
 *
 * @summary Creates or updates a machine pool
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2023-10-01-preview/examples/Pools_Put.json
 */
async function poolsCreateOrUpdate() {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const projectName = "DevProject";
  const poolName = "DevPool";
  const body: Pool = {
    devBoxDefinitionName: "WebDevBox",
    displayName: "Developer Pool",
    licenseType: "Windows_Client",
    localAdministrator: "Enabled",
    location: "centralus",
    networkConnectionName: "Network1-westus2",
    singleSignOnStatus: "Disabled",
    stopOnDisconnect: { gracePeriodMinutes: 60, status: "Enabled" },
    virtualNetworkType: "Unmanaged"
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.pools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    projectName,
    poolName,
    body
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a machine pool
 *
 * @summary Creates or updates a machine pool
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2023-10-01-preview/examples/Pools_PutWithManagedNetwork.json
 */
async function poolsCreateOrUpdateWithManagedNetwork() {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const projectName = "DevProject";
  const poolName = "DevPool";
  const body: Pool = {
    devBoxDefinitionName: "WebDevBox",
    displayName: "Developer Pool",
    licenseType: "Windows_Client",
    localAdministrator: "Enabled",
    location: "centralus",
    managedVirtualNetworkRegions: ["centralus"],
    networkConnectionName: "managedNetwork",
    singleSignOnStatus: "Disabled",
    stopOnDisconnect: { gracePeriodMinutes: 60, status: "Enabled" },
    virtualNetworkType: "Managed"
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.pools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    projectName,
    poolName,
    body
  );
  console.log(result);
}

async function main() {
  poolsCreateOrUpdate();
  poolsCreateOrUpdateWithManagedNetwork();
}

main().catch(console.error);
