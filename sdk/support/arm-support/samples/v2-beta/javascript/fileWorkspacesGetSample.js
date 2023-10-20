/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftSupport } = require("@azure/arm-support");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets details for a specific file workspace in an Azure subscription.
 *
 * @summary Gets details for a specific file workspace in an Azure subscription.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/GetFileWorkspaceDetailsForSubscription.json
 */
async function getDetailsOfASubscriptionFileWorkspace() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const fileWorkspaceName = "testworkspace";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.fileWorkspaces.get(fileWorkspaceName);
  console.log(result);
}

async function main() {
  getDetailsOfASubscriptionFileWorkspace();
}

main().catch(console.error);
