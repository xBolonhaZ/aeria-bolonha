import type {
  InferProperty,
  InferProperties,
  SchemaWithId,
  MakeEndpoint,
  RequestMethod,
  CollectionFunctionsSDK

} from '@aeriajs/types'

declare type MirrorDescriptions = {
  "animal": {
    "$id": "animal",
    "properties": {
      "name": {
        "type": "string"
      },
      "owner": {
        "$ref": "person",
        "indexes": [
          "name"
        ]
      },
      "age": {
        "type": "number"
      },
      "type": {
        "enum": [
          "dog",
          "priquito",
          "cat"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "paw-print",
    "presets": [
      "crud"
    ],
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "checkin": {
    "$id": "checkin",
    "properties": {
      "animal": {
        "$ref": "animal",
        "indexes": [
          "name"
        ]
      },
      "weight": {
        "type": "integer"
      },
      "temperature": {
        "type": "integer"
      },
      "type": {
        "enum": [
          "Routine",
          "Emergency"
        ]
      },
      "reason": {
        "type": "string"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "calendar-check",
    "presets": [
      "crud"
    ],
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "file": {
    "$id": "file",
    "icon": "paperclip",
    "owned": "always",
    "presets": [
      "owned"
    ],
    "indexes": [
      "name",
      "link",
      "type"
    ],
    "properties": {
      "type": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "last_modified": {
        "type": "string",
        "format": "date-time"
      },
      "name": {
        "type": "string"
      },
      "absolute_path": {
        "type": "string"
      },
      "relative_path": {
        "type": "string"
      },
      "immutable": {
        "type": "boolean"
      },
      "link": {
        "readOnly": true
      },
      "download_link": {
        "readOnly": true
      },
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "actions": {
      "deleteAll": {
        "label": "Remover",
        "ask": true,
        "selection": true
      }
    },
    "individualActions": {
      "remove": {
        "label": "Remover",
        "icon": "trash",
        "ask": true
      }
    }
  },
  "geolocation": {
    "$id": "geolocation",
    "properties": {
      "country": {
        "type": "string"
      },
      "state": {
        "type": "string"
      },
      "district": {
        "type": "string"
      },
      "street": {
        "type": "string"
      },
      "number": {
        "type": "string"
      },
      "complement": {
        "type": "string"
      },
      "zipcode": {
        "type": "string",
        "mask": [
          "##.###-###"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "globe",
    "presets": [
      "crud"
    ],
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "person": {
    "$id": "person",
    "properties": {
      "name": {
        "type": "string"
      },
      "document": {
        "type": "string",
        "mask": [
          "###.###.###-##"
        ]
      },
      "email": {
        "type": "string"
      },
      "phone": {
        "type": "string",
        "mask": [
          "(##) #####-####"
        ]
      },
      "type": {
        "enum": [
          "customer"
        ]
      },
      "ie": {
        "type": "integer"
      },
      "adress": {
        "$ref": "geolocation",
        "inline": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "user-circle",
    "presets": [
      "crud"
    ],
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    },
    "individualActions": {
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "tempFile": {
    "$id": "tempFile",
    "icon": "file",
    "hidden": true,
    "temporary": {
      "index": "created_at",
      "expireAfterSeconds": 3600
    },
    "properties": {
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "absolute_path": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "mime": {
        "type": "number"
      },
      "collection": {
        "type": "string"
      },
      "filename": {
        "type": "string"
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "user": {
    "$id": "user",
    "icon": "users",
    "required": [
      "name",
      "roles",
      "email"
    ],
    "form": [
      "name",
      "active",
      "roles",
      "email",
      "phone_number",
      "picture_file"
    ],
    "indexes": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "given_name": {
        "readOnly": true
      },
      "family_name": {
        "readOnly": true
      },
      "active": {
        "type": "boolean"
      },
      "roles": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
            "root",
            "customer"
          ]
        },
        "uniqueItems": true,
        "minItems": 1
      },
      "email": {
        "type": "string",
        "inputType": "email",
        "unique": true
      },
      "password": {
        "type": "string",
        "inputType": "password",
        "hidden": true
      },
      "phone_number": {
        "type": "string",
        "mask": "(##) #####-####"
      },
      "picture_file": {
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "name",
          "link",
          "type"
        ]
      },
      "picture": {
        "readOnly": true
      },
      "group": {
        "type": "string"
      },
      "self_registered": {
        "type": "boolean",
        "readOnly": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud",
      "duplicate"
    ],
    "layout": {
      "name": "grid",
      "options": {
        "title": "name",
        "badge": "roles",
        "picture": "picture_file",
        "information": "email",
        "active": "active"
      }
    },
    "individualActions": {
      "changePassword": {
        "label": "change_password",
        "icon": "key",
        "translate": true,
        "route": {
          "name": "/dashboard/user/changepass",
          "fetchItem": true
        }
      },
      "copyActivationLink": {
        "label": "copy_activation_link",
        "icon": "link",
        "translate": true
      },
      "spawnEdit": {
        "label": "action.edit",
        "event": "spawnEdit",
        "icon": "pencil-simple",
        "translate": true
      },
      "viewItem": {
        "label": "action.view",
        "icon": "eye",
        "translate": true,
        "route": {
          "name": "/dashboard/:collection/:id",
          "setItem": true
        }
      },
      "remove": {
        "label": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      },
      "duplicate": {
        "label": "action.duplicate",
        "event": "duplicate",
        "icon": "copy",
        "translate": true
      }
    },
    "filters": [
      "name",
      "roles",
      "email",
      "phone_number"
    ],
    "table": [
      "name",
      "roles",
      "picture_file",
      "active",
      "updated_at"
    ],
    "tableMeta": [
      "email"
    ],
    "formLayout": {
      "fields": {
        "given_name": {
          "span": 3
        },
        "family_name": {
          "span": 3
        }
      }
    },
    "actions": {
      "spawnAdd": {
        "label": "action.add",
        "event": "spawnAdd",
        "icon": "plus",
        "button": true,
        "translate": true
      }
    }
  }
}


declare type MirrorRouter = {
  "/animal/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/animal/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/animal/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/animal/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/checkin/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/checkin/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/checkin/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/checkin/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/file/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/file/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/file/download": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/file/removeAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/geolocation/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/geolocation/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/geolocation/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/geolocation/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/person/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/person/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/person/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/person/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/get": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/getAll": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/remove": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/upload": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/removeFile": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/insert": {
    "POST": {
      "roles": [
        "root"
      ],
      "builtin": true
    }
  },
  "/user/authenticate": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/activate": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/createAccount": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getInfo": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getCurrentUser": {
    "POST": {
      "roles": [
        "root"
      ],
      "response": {
        "$ref": "user"
      }
    }
  },
  "/user/getActivationLink": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/list/checkins": {
    "GET": {
      "query": {
        "type": "object",
        "properties": {
          "document": {
            "type": "string"
          }
        }
      },
      "response": [
        {
          "type": "object",
          "properties": {
            "_tag": {
              "const": "Error"
            },
            "result": {},
            "error": {
              "type": "object",
              "required": [
                "httpStatus",
                "code"
              ],
              "properties": {
                "httpStatus": {
                  "enum": [
                    400,
                    403,
                    404
                  ]
                },
                "code": {
                  "enum": [
                    "OWNERSHIP_ERROR",
                    "RESOURCE_NOT_FOUND",
                    "MALFORMED_INPUT"
                  ]
                },
                "message": {
                  "type": "string"
                },
                "details": {
                  "type": "object",
                  "variable": true
                }
              }
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "_tag": {
              "const": "Result"
            },
            "error": {},
            "result": {
              "type": "array",
              "items": {
                "type": "object",
                "$ref": "checkin"
              }
            }
          }
        }
      ]
    }
  }
}


declare global {
  type Collections = {
    [K in keyof MirrorDescriptions]: {
      item: SchemaWithId<MirrorDescriptions[K]>
    }
  }
}

declare module 'aeria-sdk' {
  import { TopLevelObject } from 'aeria-sdk'

  type UnionToIntersection<T> = (T extends unknown ? ((x: T) => 0) : never) extends ((x: infer R) => 0)
    ? R
    : never

  type InferEndpoint<Route extends keyof MirrorRouter> = {
    [Method in keyof MirrorRouter[Route]]: Method extends RequestMethod
      ? MirrorRouter[Route][Method] extends infer Contract
        ? Contract extends
        | { response: infer RouteResponse }
        | { payload: infer RoutePayload  }
        | { query: infer RoutePayload  }
          ? MakeEndpoint<
            Route,
            Method,
            InferProperties<RouteResponse>,
            RoutePayload extends {}
              ? InferProperty<RoutePayload>
              : undefined
          >
          : MakeEndpoint<Route, Method>
        : never
      : never
    } extends infer Methods
      ? Methods[keyof Methods]
      : never

  type Endpoints = {
    [Route in keyof MirrorRouter]: Route extends `/${infer Coll}/${infer Fn}`
      ? Coll extends keyof Collections
        ? Fn extends keyof CollectionFunctionsSDK
          ? Record<Coll, Record<
              Fn, {
              POST: CollectionFunctionsSDK<SchemaWithId<MirrorDescriptions[Coll]>>[Fn]
            }
            >>
          : InferEndpoint<Route>
        : InferEndpoint<Route>
      : InferEndpoint<Route>
  } extends infer Endpoints
    ? UnionToIntersection<Endpoints[keyof Endpoints]>
    : never

  type TopLevelAeria = 
    & ((bearerToken?: string) => TopLevelObject & Endpoints)
    & TopLevelObject & Endpoints

  const topLevelAeria: TopLevelAeria

  export const url: string
  export const aeria: TopLevelAeria
  export default topLevelAeria
}

