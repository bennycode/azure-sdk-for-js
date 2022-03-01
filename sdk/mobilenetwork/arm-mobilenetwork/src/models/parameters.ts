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
  AttachedDataNetwork as AttachedDataNetworkMapper,
  TagsObject as TagsObjectMapper,
  DataNetwork as DataNetworkMapper,
  MobileNetwork as MobileNetworkMapper,
  Site as SiteMapper,
  Sim as SimMapper,
  PacketCoreControlPlane as PacketCoreControlPlaneMapper,
  PacketCoreDataPlane as PacketCoreDataPlaneMapper,
  Service as ServiceMapper,
  SimPolicy as SimPolicyMapper,
  Slice as SliceMapper
} from "../models/mappers";

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

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const packetCoreControlPlaneName: OperationURLParameter = {
  parameterPath: "packetCoreControlPlaneName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "packetCoreControlPlaneName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const packetCoreDataPlaneName: OperationURLParameter = {
  parameterPath: "packetCoreDataPlaneName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "packetCoreDataPlaneName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const attachedDataNetworkName: OperationURLParameter = {
  parameterPath: "attachedDataNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*$"
      ),
      MaxLength: 64
    },
    serializedName: "attachedDataNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: AttachedDataNetworkMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
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

export const mobileNetworkName: OperationURLParameter = {
  parameterPath: "mobileNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "mobileNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const dataNetworkName: OperationURLParameter = {
  parameterPath: "dataNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*$"
      ),
      MaxLength: 64
    },
    serializedName: "dataNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: DataNetworkMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: MobileNetworkMapper
};

export const siteName: OperationURLParameter = {
  parameterPath: "siteName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "siteName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: SiteMapper
};

export const simName: OperationURLParameter = {
  parameterPath: "simName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "simName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: SimMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: PacketCoreControlPlaneMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: PacketCoreDataPlaneMapper
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$"
      ),
      MaxLength: 64
    },
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServiceMapper
};

export const simPolicyName: OperationURLParameter = {
  parameterPath: "simPolicyName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "simPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: SimPolicyMapper
};

export const sliceName: OperationURLParameter = {
  parameterPath: "sliceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-]*$"),
      MaxLength: 64
    },
    serializedName: "sliceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: SliceMapper
};
