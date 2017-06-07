# HAPPNER PROTOCOL
* __PROTOCOL VERSION: undefined__
* __HAPPNER VERSION:  2.14.2__
* __RUN: 2017 June 07 03:23__
## start Happner server

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
## create happner client

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "componentName": {
    "version": "^1.0.0",
    "methods": {
      "methodName": {},
      "causeEventMethod": {},
      "erroringMethodName": {},
      "missingMethodName": {}
    }
  },
  "missingComponentName": {
    "version": "^1.0.0",
    "methods": {
      "missingMethodName": {}
    }
  }
}
```
</details></summary>
## connect happner client to happner server

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "componentName": {
    "version": "^1.0.0",
    "methods": {
      "methodName": {},
      "causeEventMethod": {},
      "erroringMethodName": {},
      "missingMethodName": {}
    }
  },
  "missingComponentName": {
    "version": "^1.0.0",
    "methods": {
      "missingMethodName": {}
    }
  }
}
```
</details></summary>
#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  },
  "__outbound": true
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  },
  "__outbound": true
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": false
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": false
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  },
  "__outbound": true
}
```
</details></summary>
## subscribe to mesh event

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "componentName": {
    "version": "^1.0.0",
    "methods": {
      "methodName": {},
      "causeEventMethod": {},
      "erroringMethodName": {},
      "missingMethodName": {}
    }
  },
  "missingComponentName": {
    "version": "^1.0.0",
    "methods": {
      "missingMethodName": {}
    }
  }
}
```
</details></summary>
#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  },
  "__outbound": true
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  },
  "__outbound": true
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": false
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": false
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  },
  "__outbound": true
}
```
</details></summary>
#### get
*client -> server*

<details><summary>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "get"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_events/TestNode/componentName/event/name"
    ],
    "action": "SET"
  },
  "key": "/_events/TestNode/componentName/event/name"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "consistency": 2,
    "publicationId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95-7"
  },
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "set"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "channel": "/SET@/_events/TestNode/componentName/event/name",
    "action": "/SET@/_events/TestNode/componentName/event/name",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
    "action": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
## disconnect from happner server

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "componentName": {
    "version": "^1.0.0",
    "methods": {
      "methodName": {},
      "causeEventMethod": {},
      "erroringMethodName": {},
      "missingMethodName": {}
    }
  },
  "missingComponentName": {
    "version": "^1.0.0",
    "methods": {
      "missingMethodName": {}
    }
  }
}
```
</details></summary>
#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  },
  "__outbound": true
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  },
  "__outbound": true
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": false
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": false
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  },
  "__outbound": true
}
```
</details></summary>
#### get
*client -> server*

<details><summary>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "get"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_events/TestNode/componentName/event/name"
    ],
    "action": "SET"
  },
  "key": "/_events/TestNode/componentName/event/name"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "consistency": 2,
    "publicationId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95-7"
  },
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "set"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "channel": "/SET@/_events/TestNode/componentName/event/name",
    "action": "/SET@/_events/TestNode/componentName/event/name",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
    "action": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### disconnect
*client -> server*

<details><summary>
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "disconnect"
  },
  "__outbound": true
}
```
</details></summary>
## stopping happner server

#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session",
    "nullData": true
  }
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ",
    "_meta": {
      "type": "response",
      "status": "ok",
      "published": false,
      "eventId": 2,
      "action": "describe"
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  }
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": true
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": true
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496841793135,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496841793135,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793192,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793192,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793205,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793205,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/security/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/security/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/api/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/api/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/system/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/system/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/rest/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/rest/*"
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/requests/TestNode/componentName/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/requests/TestNode/componentName/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "on"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 12,
  "path": "/mesh/schema/description",
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "version": "2.14.2",
    "happn": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "datalayer": {
      "port": 50505,
      "secure": false,
      "setOptions": {
        "timeout": 10000,
        "noStore": true
      }
    },
    "_meta": {
      "created": 1495708248885,
      "modified": 1496841793484,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496841793484,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "componentName": {
    "version": "^1.0.0",
    "methods": {
      "methodName": {},
      "causeEventMethod": {},
      "erroringMethodName": {},
      "missingMethodName": {}
    }
  },
  "missingComponentName": {
    "version": "^1.0.0",
    "methods": {
      "missingMethodName": {}
    }
  }
}
```
</details></summary>
#### configure-session
*client -> server*

<details><summary>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  },
  "__outbound": true
}
```
</details></summary>
#### describe
*client -> server*

<details><summary>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "secure": false,
    "encryptPayloads": false,
    "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 2,
    "action": "describe"
  },
  "__outbound": true
}
```
</details></summary>
#### login
*client -> server*

<details><summary>
```json
{
  "action": "login",
  "eventId": 3,
  "data": {
    "info": {
      "_browser": false,
      "_local": false
    },
    "protocol": "happn_1.3.0"
  },
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "protocol": "happn_1.3.0",
    "happn": {
      "name": "TestNode",
      "secure": false,
      "encryptPayloads": false,
      "publicKey": "AmVu/uIvjY8r8YAYohigizLO+kRNhWGGBnkOXtyuswqJ"
    },
    "info": {
      "_browser": false,
      "_local": false
    }
  },
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 3,
    "action": "login"
  },
  "__outbound": true
}
```
</details></summary>
#### get
*client -> server*

<details><summary>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSecurityChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "attachToSessionChanges": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getComponentId": {
            "parameters": []
          },
          "getSystemPermissions": {
            "parameters": [
              {
                "name": "params"
              },
              {
                "name": "callback"
              }
            ]
          },
          "associateGroups": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "link"
              },
              {
                "name": "unlink"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "upsertGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "options"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "mergePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "removeGroupPermissions": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "removePermissions"
              },
              {
                "name": "callback"
              }
            ]
          },
          "addUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateOwnUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "updateUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroupName": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "linkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "unlinkGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listGroups": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listUsers": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getUser": {
            "parameters": [
              {
                "name": "userName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "getGroup": {
            "parameters": [
              {
                "name": "groupName"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteGroup": {
            "parameters": [
              {
                "name": "group"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deleteUser": {
            "parameters": [
              {
                "name": "user"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionManagementActive": {
            "parameters": []
          },
          "activateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionManagement": {
            "parameters": [
              {
                "name": "logSessionActivity"
              },
              {
                "name": "callback"
              }
            ]
          },
          "sessionActivityActive": {
            "parameters": []
          },
          "activateSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "deactivateSessionActivity": {
            "parameters": [
              {
                "name": "clear"
              },
              {
                "name": "callback"
              }
            ]
          },
          "clearSessionActivity": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "revokeSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "reason"
              },
              {
                "name": "callback"
              }
            ]
          },
          "restoreSession": {
            "parameters": [
              {
                "name": "session"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listSessionActivity": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listActiveSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          },
          "listRevokedSessions": {
            "parameters": [
              {
                "name": "filter"
              },
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "api": {
        "name": "api",
        "version": "2.14.2",
        "methods": {
          "test": {
            "parameters": []
          }
        },
        "routes": {
          "/api/client": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "system": {
        "name": "system",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "compactDBFile": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "activateStatistics": {
            "parameters": [
              {
                "name": "interval"
              }
            ]
          },
          "deactivateStatistics": {
            "parameters": []
          },
          "getDBFileInfo": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "getStats": {
            "parameters": [
              {
                "name": "measureInterval"
              },
              {
                "name": "callback"
              }
            ]
          },
          "systemInfo": {
            "parameters": []
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      },
      "rest": {
        "name": "rest",
        "version": "2.14.2",
        "methods": {
          "initialize": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {
          "/rest/method": {
            "type": "mware"
          },
          "/rest/describe": {
            "type": "mware"
          },
          "/rest/login": {
            "type": "mware"
          }
        },
        "events": {},
        "data": {}
      },
      "componentName": {
        "name": "componentName",
        "version": "1.0.0",
        "methods": {
          "methodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "causeEventMethod": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          },
          "erroringMethodName": {
            "parameters": [
              {
                "name": "callback"
              }
            ]
          }
        },
        "routes": {},
        "events": {},
        "data": {}
      }
    },
    "setOptions": {
      "timeout": 10000,
      "noStore": true
    },
    "_meta": {
      "created": 1495708248883,
      "modified": 1496841793473,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496841793473,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "get"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_events/TestNode/componentName/event/name"
    ],
    "action": "SET"
  },
  "key": "/_events/TestNode/componentName/event/name"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### on
*client -> server*

<details><summary>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
  "data": null,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  },
  "pathData": {
    "parts": [
      "/SET",
      "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "on"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "consistency": 2,
    "publicationId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95-7"
  },
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "set"
  },
  "__outbound": true
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000,
    "consistency": 2
  }
}
```
</details></summary>
#### set
*client -> server*

<details><summary>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "channel": "/SET@/_events/TestNode/componentName/event/name",
    "action": "/SET@/_events/TestNode/componentName/event/name",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/*",
    "action": "/SET@/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "consistency": 2,
    "publicationId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "key": "value",
    "_meta": {
      "path": "/_events/TestNode/componentName/event/name",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 14,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/25a6c7c1-270b-46cc-9c3a-7cfb521b9e95/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "399669e9-e1a8-41ae-ab2f-2d2bd99126f0",
    "action": "set"
  }
}
```
</details></summary>
#### disconnect
*client -> server*

<details><summary>
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
  "options": {
    "timeout": 60000
  }
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "25a6c7c1-270b-46cc-9c3a-7cfb521b9e95",
    "action": "disconnect"
  },
  "__outbound": true
}
```
</details></summary>
*server -> client*

<details><summary>
```json
{
  "_meta": {
    "type": "system"
  },
  "eventKey": "server-side-disconnect",
  "data": "server-side-disconnect"
}
```
</details></summary>
