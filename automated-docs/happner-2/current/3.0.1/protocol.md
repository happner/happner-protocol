# HAPPNER PROTOCOL 
* __PROTOCOL VERSION: undefined__ 
* __HAPPNER VERSION:  3.0.1__ 
* __RUN: 2017 June 13 10:20__ 
## start happner server
 
#### configure-session
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
</p>

</details>

#### describe
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "describe",
  "eventId": 2
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
</p>

</details>

#### login
<details>

<summary>client -> server</summary>

<p>

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
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "id": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1497342053869,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "can": "can",
    "_meta": {
      "created": 1495708248824,
      "modified": 1497342053869,
      "path": "/test/write",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 4,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1497342053869,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

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
      "modified": 1497342053961,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {},
    "_meta": {
      "created": 1495708248883,
      "modified": 1497342053961,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 5,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1497342053961,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "set",
  "eventId": 6,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "3.0.1",
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
      "modified": 1497342053964,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "name": "TestNode",
    "version": "3.0.1",
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
      "modified": 1497342053964,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 6,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1497342053964,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 7,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "on"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 8,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "on"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 9,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "on"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 10,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "on"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "_meta": {
      "status": "ok",
      "type": "response",
      "published": false,
      "eventId": 11,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "on"
    }
  },
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "on"
  }
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
      "modified": 1497342054200,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
      "modified": 1497342054200,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1497342054200,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "set",
  "eventId": 13,
  "path": "/mesh/schema/config",
  "data": {
    "name": "TestNode",
    "version": "3.0.1",
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
      "modified": 1497342054203,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 60000,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "name": "TestNode",
    "version": "3.0.1",
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
      "modified": 1497342054203,
      "path": "/mesh/schema/config",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 13,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1497342054203,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

## create happner client
 
#### creating model: 
<details>

<summary>client</summary>

<p>

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
</p>

</details>

## connect happner client to happner server
 
#### configure-session
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
</p>

</details>

#### describe
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "describe",
  "eventId": 2
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
</p>

</details>

#### login
<details>

<summary>client -> server</summary>

<p>

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
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "id": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
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
</p>

</details>

## subscribe to mesh event
 
#### get
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
  "options": {
    "timeout": 60000,
    "options": {}
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "name": "TestNode",
    "initializing": false,
    "components": {
      "security": {
        "name": "security",
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
        "version": "3.0.1",
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
      "modified": 1497342054200,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1497342054200,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "action": "get"
  },
  "__outbound": true
}
```
</p>

</details>

#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
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
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "action": "on"
  },
  "__outbound": true
}
```
</p>

</details>

## invoke remote function
 
#### on
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/*",
  "data": null,
  "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
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
      "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/*"
    ],
    "action": "SET"
  },
  "key": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/*"
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "action": "on"
  },
  "__outbound": true
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "4a7551e7-a436-4354-a59a-eab486d9ac6a"
    }
  },
  "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "4a7551e7-a436-4354-a59a-eab486d9ac6a"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "consistency": 2,
    "publicationId": "4a7551e7-a436-4354-a59a-eab486d9ac6a-7"
  },
  "protocol": "happn_1.3.0"
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "4a7551e7-a436-4354-a59a-eab486d9ac6a"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "action": "set"
  },
  "__outbound": true
}
```
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

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
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
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
</p>

</details>

#### set
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ],
    "_meta": {
      "path": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
  "options": {
    "timeout": 10000,
    "noStore": true,
    "consistency": 2
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "consistency": 2,
    "publicationId": "c5b1c219-4c63-44ab-80bd-fb64a6190102-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
    "path": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/*",
    "action": "/SET@/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "consistency": 2,
    "publicationId": "c5b1c219-4c63-44ab-80bd-fb64a6190102-15"
  },
  "__outbound": true,
  "protocol": "happn_1.3.0"
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

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
      "path": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 15,
      "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
      "action": "set"
    }
  },
  "_meta": {
    "path": "/_exchange/responses/4a7551e7-a436-4354-a59a-eab486d9ac6a/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "c5b1c219-4c63-44ab-80bd-fb64a6190102",
    "action": "set"
  }
}
```
</p>

</details>

## disconnect from happner server
 
#### disconnect
<details>

<summary>client -> server</summary>

<p>

```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
  "options": {
    "timeout": 60000
  }
}
```
</p>

</details>

<details>

<summary>server -> client</summary>

<p>

```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "4a7551e7-a436-4354-a59a-eab486d9ac6a",
    "action": "disconnect"
  },
  "__outbound": true
}
```
</p>

</details>

## stopping happner server
 
<details>

<summary>server -> client</summary>

<p>

```json
{
  "_meta": {
    "type": "system"
  },
  "eventKey": "server-side-disconnect",
  "data": "server-side-disconnect"
}
```
</p>

</details>

