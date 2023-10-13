/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CreateCallRequest as CreateCallRequestMapper,
  AnswerCallRequest as AnswerCallRequestMapper,
  RedirectCallRequest as RedirectCallRequestMapper,
  RejectCallRequest as RejectCallRequestMapper,
  TransferToParticipantRequest as TransferToParticipantRequestMapper,
  AddParticipantRequest as AddParticipantRequestMapper,
  RemoveParticipantRequest as RemoveParticipantRequestMapper,
  MuteParticipantsRequest as MuteParticipantsRequestMapper,
  CancelAddParticipantRequest as CancelAddParticipantRequestMapper,
  PlayRequest as PlayRequestMapper,
  RecognizeRequest as RecognizeRequestMapper,
  ContinuousDtmfRecognitionRequest as ContinuousDtmfRecognitionRequestMapper,
  SendDtmfTonesRequest as SendDtmfTonesRequestMapper,
  StartCallRecordingRequest as StartCallRecordingRequestMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const createCallRequest: OperationParameter = {
  parameterPath: "createCallRequest",
  mapper: CreateCallRequestMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-10-15",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const repeatabilityRequestID: OperationParameter = {
  parameterPath: ["options", "repeatabilityRequestID"],
  mapper: {
    serializedName: "Repeatability-Request-ID",
    type: {
      name: "Uuid"
    }
  }
};

export const repeatabilityFirstSent: OperationParameter = {
  parameterPath: ["options", "repeatabilityFirstSent"],
  mapper: {
    serializedName: "Repeatability-First-Sent",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const answerCallRequest: OperationParameter = {
  parameterPath: "answerCallRequest",
  mapper: AnswerCallRequestMapper
};

export const redirectCallRequest: OperationParameter = {
  parameterPath: "redirectCallRequest",
  mapper: RedirectCallRequestMapper
};

export const rejectCallRequest: OperationParameter = {
  parameterPath: "rejectCallRequest",
  mapper: RejectCallRequestMapper
};

export const callConnectionId: OperationURLParameter = {
  parameterPath: "callConnectionId",
  mapper: {
    serializedName: "callConnectionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const transferToParticipantRequest: OperationParameter = {
  parameterPath: "transferToParticipantRequest",
  mapper: TransferToParticipantRequestMapper
};

export const addParticipantRequest: OperationParameter = {
  parameterPath: "addParticipantRequest",
  mapper: AddParticipantRequestMapper
};

export const removeParticipantRequest: OperationParameter = {
  parameterPath: "removeParticipantRequest",
  mapper: RemoveParticipantRequestMapper
};

export const muteParticipantsRequest: OperationParameter = {
  parameterPath: "muteParticipantsRequest",
  mapper: MuteParticipantsRequestMapper
};

export const cancelAddParticipantRequest: OperationParameter = {
  parameterPath: "cancelAddParticipantRequest",
  mapper: CancelAddParticipantRequestMapper
};

export const participantRawId: OperationURLParameter = {
  parameterPath: "participantRawId",
  mapper: {
    serializedName: "participantRawId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const playRequest: OperationParameter = {
  parameterPath: "playRequest",
  mapper: PlayRequestMapper
};

export const recognizeRequest: OperationParameter = {
  parameterPath: "recognizeRequest",
  mapper: RecognizeRequestMapper
};

export const continuousDtmfRecognitionRequest: OperationParameter = {
  parameterPath: "continuousDtmfRecognitionRequest",
  mapper: ContinuousDtmfRecognitionRequestMapper
};

export const sendDtmfTonesRequest: OperationParameter = {
  parameterPath: "sendDtmfTonesRequest",
  mapper: SendDtmfTonesRequestMapper
};

export const startCallRecording: OperationParameter = {
  parameterPath: "startCallRecording",
  mapper: StartCallRecordingRequestMapper
};

export const recordingId: OperationURLParameter = {
  parameterPath: "recordingId",
  mapper: {
    serializedName: "recordingId",
    required: true,
    type: {
      name: "String"
    }
  }
};
