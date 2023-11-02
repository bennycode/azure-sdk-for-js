/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all volumes within the capacity pool
 *
 * @summary List all volumes within the capacity pool
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2023-05-01/examples/Volumes_List.json
 */
async function volumesList() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.volumes.list(
    resourceGroupName,
    accountName,
    poolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  volumesList();
}

main().catch(console.error);
