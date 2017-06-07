# HAPPNER PROTOCOL
* __PROTOCOL VERSION: undefined__
* __HAPPNER VERSION:  2.14.2__
* __RUN: 2017 June 07 03:27__
## start Happner server

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
## create happner client

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
## connect happner client to happner server

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
## subscribe to mesh event

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
#### get
*client -> server*

<details><p>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "get"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
      "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "consistency": 2,
    "publicationId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625-7"
  },
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "set"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
    "action": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
## disconnect from happner server

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
#### get
*client -> server*

<details><p>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "get"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
      "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "consistency": 2,
    "publicationId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625-7"
  },
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "set"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
    "action": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### disconnect
*client -> server*

<details><p>
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 60000
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "disconnect"
  },
  "__outbound": true
}
```
</p></details><p/>
## stopping happner server

#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1496842032733,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496842032733,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1496842032792,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842032792,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842032808,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842032808,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "on"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033103,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496842033103,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### configure-session
*client -> server*

<details><p>
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### describe
*client -> server*

<details><p>
```json
{
  "action": "describe",
  "eventId": 2
}
```
</p></details><p/>
*server -> client*

<details><p>
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
</p></details><p/>
#### login
*client -> server*

<details><p>
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
#### get
*client -> server*

<details><p>
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "modified": 1496842033079,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496842033079,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "get"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### on
*client -> server*

<details><p>
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
  "data": null,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
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
      "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "on"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "consistency": 2,
    "publicationId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625-7"
  },
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "set"
  },
  "__outbound": true
}
```
</p></details><p/>
#### set
*client -> server*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
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
</p></details><p/>
#### set
*client -> server*

<details><p>
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/*",
    "action": "/SET@/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "consistency": 2,
    "publicationId": "512b3a4e-97b4-431a-b64e-d002044e676d-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
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
      "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/88a27b2f-2d0b-40d7-92a4-cfe705e6d625/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "512b3a4e-97b4-431a-b64e-d002044e676d",
    "action": "set"
  }
}
```
</p></details><p/>
#### disconnect
*client -> server*

<details><p>
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
  "options": {
    "timeout": 60000
  }
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "88a27b2f-2d0b-40d7-92a4-cfe705e6d625",
    "action": "disconnect"
  },
  "__outbound": true
}
```
</p></details><p/>
*server -> client*

<details><p>
```json
{
  "_meta": {
    "type": "system"
  },
  "eventKey": "server-side-disconnect",
  "data": "server-side-disconnect"
}
```
</p></details><p/>
