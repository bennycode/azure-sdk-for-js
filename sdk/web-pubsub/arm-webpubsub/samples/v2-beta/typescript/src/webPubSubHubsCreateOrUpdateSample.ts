/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebPubSubHub, WebPubSubManagementClient } from "@azure/arm-webpubsub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a hub setting.
 *
 * @summary Create or update a hub setting.
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/preview/2023-08-01-preview/examples/WebPubSubHubs_CreateOrUpdate.json
 */
async function webPubSubHubsCreateOrUpdate() {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const hubName = "exampleHub";
  const resourceGroupName =
    process.env["WEB-PUBSUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myWebPubSubService";
  const parameters: WebPubSubHub = {
    properties: {
      anonymousConnectPolicy: "allow",
      eventHandlers: [
        {
          auth: {
            type: "ManagedIdentity",
            managedIdentity: { resource: "abc" }
          },
          systemEvents: ["connect", "connected"],
          urlTemplate: "http://host.com",
          userEventPattern: "*"
        }
      ],
      eventListeners: [
        {
          endpoint: {
            type: "EventHub",
            eventHubName: "eventHubName1",
            fullyQualifiedNamespace: "example.servicebus.windows.net"
          },
          filter: {
            type: "EventName",
            systemEvents: ["connected", "disconnected"],
            userEventPattern: "*"
          }
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const result = await client.webPubSubHubs.beginCreateOrUpdateAndWait(
    hubName,
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  webPubSubHubsCreateOrUpdate();
}

main().catch(console.error);
