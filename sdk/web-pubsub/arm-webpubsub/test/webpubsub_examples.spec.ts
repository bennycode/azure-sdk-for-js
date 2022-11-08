/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { WebPubSubManagementClient } from "../src/webPubSubManagementClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("webPubSub test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: WebPubSubManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new WebPubSubManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourceName = "myWebPubSubService1"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("checkname test", async function () {
    const res = await client.webPubSub.checkNameAvailability(
      location,
      {
        name: resourceName,
        type: "Microsoft.SignalRService/WebPubSub"
      }
    );
  })

  it("webPubSub create test", async function () {
    const res = await client.webPubSub.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourceName,
      {
        disableAadAuth: false,
        disableLocalAuth: false,
        identity: { type: "SystemAssigned" },
        liveTraceConfiguration: {
          categories: [{ name: "ConnectivityLogs", enabled: "true" }],
          enabled: "false"
        },
        location,
        networkACLs: {
          defaultAction: "Deny",
          publicNetwork: { allow: ["ClientConnection"] }
        },
        publicNetworkAccess: "Enabled",
        sku: { name: "Free_F1", capacity: 1, tier: "Free" },
        tags: { key1: "value1" },
        tls: { clientCertEnabled: false }
      },
      testPollingOptions);
    assert.equal(res.name, resourceName);
  });

  it("webPubSub get test", async function () {
    const res = await client.webPubSub.get(resourceGroup, resourceName);
    assert.equal(res.name, resourceName);
  });

  it("webPubSub list test", async function () {
    const resArray = new Array();
    for await (let item of client.webPubSub.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("webPubSub delete test", async function () {
    const resArray = new Array();
    const res = await client.webPubSub.beginDeleteAndWait(resourceGroup, resourceName)
    for await (let item of client.webPubSub.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
