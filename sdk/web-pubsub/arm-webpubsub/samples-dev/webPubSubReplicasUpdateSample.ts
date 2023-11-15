/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Replica, WebPubSubManagementClient } from "@azure/arm-webpubsub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Operation to update an exiting replica.
 *
 * @summary Operation to update an exiting replica.
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/preview/2023-08-01-preview/examples/WebPubSubReplicas_Update.json
 */
async function webPubSubReplicasUpdate() {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WEB-PUBSUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myWebPubSubService";
  const replicaName = "myWebPubSubService-eastus";
  const parameters: Replica = {
    location: "eastus",
    resourceStopped: "false",
    sku: { name: "Premium_P1", capacity: 1, tier: "Premium" },
    tags: { key1: "value1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const result = await client.webPubSubReplicas.beginUpdateAndWait(
    resourceGroupName,
    resourceName,
    replicaName,
    parameters
  );
  console.log(result);
}

async function main() {
  webPubSubReplicasUpdate();
}

main().catch(console.error);
