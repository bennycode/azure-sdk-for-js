/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates tags of an IpGroups resource.
 *
 * @summary Updates tags of an IpGroups resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/IpGroupsUpdateTags.json
 */
async function updateIPGroups() {
  const subscriptionId = "subId";
  const resourceGroupName = "myResourceGroup";
  const ipGroupsName = "ipGroups1";
  const parameters: TagsObject = { tags: { key1: "value1", key2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ipGroups.updateGroups(
    resourceGroupName,
    ipGroupsName,
    parameters
  );
  console.log(result);
}

updateIPGroups().catch(console.error);
