/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ChatMessageReadReceiptsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceiptsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessageReadReceipt"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessageReadReceipt: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceipt",
    modelProperties: {
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String"
        }
      },
      readOn: {
        serializedName: "readOn",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CommunicationIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentifierModel",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      rawId: {
        serializedName: "rawId",
        type: {
          name: "String"
        }
      },
      communicationUser: {
        serializedName: "communicationUser",
        type: {
          name: "Composite",
          className: "CommunicationUserIdentifierModel"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "Composite",
          className: "PhoneNumberIdentifierModel"
        }
      },
      microsoftTeamsUser: {
        serializedName: "microsoftTeamsUser",
        type: {
          name: "Composite",
          className: "MicrosoftTeamsUserIdentifierModel"
        }
      }
    }
  }
};

export const CommunicationUserIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationUserIdentifierModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberIdentifierModel",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MicrosoftTeamsUserIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MicrosoftTeamsUserIdentifierModel",
    modelProperties: {
      userId: {
        serializedName: "userId",
        required: true,
        type: {
          name: "String"
        }
      },
      isAnonymous: {
        serializedName: "isAnonymous",
        type: {
          name: "Boolean"
        }
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ChatError"
        }
      }
    }
  }
};

export const ChatError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ChatError"
        }
      }
    }
  }
};

export const SendReadReceiptRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendReadReceiptRequest",
    modelProperties: {
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendChatMessageRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "text",
            "html",
            "topicUpdated",
            "participantAdded",
            "participantRemoved"
          ]
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const SendChatMessageResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageResult",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessagesCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessagesCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessage",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "text",
            "html",
            "topicUpdated",
            "participantAdded",
            "participantRemoved"
          ]
        }
      },
      sequenceId: {
        serializedName: "sequenceId",
        required: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "ChatMessageContent"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      editedOn: {
        serializedName: "editedOn",
        type: {
          name: "DateTime"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ChatMessageContent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageContent",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatAttachment"
            }
          }
        }
      },
      initiatorCommunicationIdentifier: {
        serializedName: "initiatorCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      }
    }
  }
};

export const ChatParticipant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipant",
    modelProperties: {
      communicationIdentifier: {
        serializedName: "communicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      shareHistoryTime: {
        serializedName: "shareHistoryTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ChatAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatAttachment",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      attachmentType: {
        serializedName: "attachmentType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["image", "file"]
        }
      },
      extension: {
        serializedName: "extension",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      previewUrl: {
        serializedName: "previewUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateChatMessageRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ChatParticipantsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipantsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddChatParticipantsRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsRequest",
    modelProperties: {
      participants: {
        serializedName: "participants",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      }
    }
  }
};

export const AddChatParticipantsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsResult",
    modelProperties: {
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      }
    }
  }
};

export const CreateChatThreadRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      }
    }
  }
};

export const CreateChatThreadResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadResult",
    modelProperties: {
      chatThread: {
        serializedName: "chatThread",
        type: {
          name: "Composite",
          className: "ChatThreadProperties"
        }
      },
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      }
    }
  }
};

export const ChatThreadProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      createdByCommunicationIdentifier: {
        serializedName: "createdByCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ChatThreadsItemCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadsItemCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatThreadItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatThreadItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadItem",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      lastMessageReceivedOn: {
        serializedName: "lastMessageReceivedOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateChatThreadRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendTypingNotificationRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendTypingNotificationRequest",
    modelProperties: {
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      }
    }
  }
};
