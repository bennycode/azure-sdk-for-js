# Release History

## 1.0.0 (Unreleased)

### Features Added

This is the initial release of the @azure-rest version of Job Router SDK.
There was a previous preview SDK under a different package named @azure/communication-job-router which will be deprecated.

Using AzureCommunicationRoutingServiceClient:

- Upsert, get, list and delete DistributionPolicy.
- Upsert, get, list and delete RouterQueue.
- Upsert, get, list and delete ClassificationPolicy.
- Upsert, get, list and delete ExceptionPolicy.
- Upsert, get, list and delete RouterJob.
- RouterJob can be created and updated with different matching modes: QueueAndMatchMode, ScheduleAndSuspendMode and SuspendMode.
- Reclassify a RouterJob.
- Close a RouterJob.
- Complete a RouterJob.
- Cancel a RouterJob.
- Unassign a RouterJob.
- Get the position of a RouterJob in a queue.
- Upsert, get, list and delete RouterWorker.
- Accept an offer.
- Decline an offer.
- Get queue statistics.

### Bugs Fixed

### Other Changes
