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
 * This sample demonstrates how to Gets the specified load balancer.
 *
 * @summary Gets the specified load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-04-01/examples/LoadBalancerGet.json
 */
async function getLoadBalancer() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.get(resourceGroupName, loadBalancerName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the specified load balancer.
 *
 * @summary Gets the specified load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-04-01/examples/LoadBalancerGetInboundNatRulePortMapping.json
 */
async function getLoadBalancerWithInboundNatRulePortMapping() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.get(resourceGroupName, loadBalancerName);
  console.log(result);
}

async function main() {
  getLoadBalancer();
  getLoadBalancerWithInboundNatRulePortMapping();
}

main().catch(console.error);
