/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates the specified Bastion Host.
 *
 * @summary Creates or updates the specified Bastion Host.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-04-01/examples/BastionHostPut.json
 */
async function createBastionHost() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const bastionHostName = "bastionhosttenant";
  const parameters = {
    ipConfigurations: [
      {
        name: "bastionHostIpConfiguration",
        publicIPAddress: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName",
        },
        subnet: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/BastionHostSubnet",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.bastionHosts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    bastionHostName,
    parameters
  );
  console.log(result);
}

async function main() {
  createBastionHost();
}

main().catch(console.error);
