/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  FleetUpdateStrategy,
  ContainerServiceFleetClient
} from "@azure/arm-containerservicefleet";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a FleetUpdateStrategy
 *
 * @summary Create a FleetUpdateStrategy
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/UpdateStrategies_CreateOrUpdate.json
 */
async function createAFleetUpdateStrategy() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const updateStrategyName = "strartegy1";
  const resource: FleetUpdateStrategy = {
    strategy: {
      stages: [
        {
          name: "stage1",
          afterStageWaitInSeconds: 3600,
          groups: [{ name: "group-a" }]
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleetUpdateStrategies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    updateStrategyName,
    resource
  );
  console.log(result);
}

async function main() {
  createAFleetUpdateStrategy();
}

main().catch(console.error);
