// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary Exception policy crud
 */

import {
  QueueLengthExceptionTrigger,
  AzureCommunicationRoutingServiceClient,
} from "../src";
import JobRouter from "../src"; import { DefaultAzureCredential } from "@azure/identity";

// Update a exception policy
async function updateExceptionPolicy(): Promise<void> {
  // Create the Router Client
  const routerClient: AzureCommunicationRoutingServiceClient =
    JobRouter("https://<endpoint>", new DefaultAzureCredential());

  // define exception trigger for queue over flow
  const queueLengthExceptionTrigger: QueueLengthExceptionTrigger = {
    kind: "queue-length",
    threshold: 10,
  };

  const id = "exception-policy-123";

  const result = await routerClient.path("/routing/exceptionPolicies/{exceptionPolicyId}", id).patch({
    contentType: "application/merge-patch+json",
    body: {
      name: "test-policy",
      exceptionRules: [{
        id: "MaxWaitTimeExceeded",
        actions: [{
          kind: "reclassify",
          classificationPolicyId: "Main",
          labelsToUpsert: {
            escalated: true,
          },
        }],
        trigger: queueLengthExceptionTrigger,
      }]
    }
  });
  console.log("exception policy: " + result);
}

updateExceptionPolicy().catch(console.error);
