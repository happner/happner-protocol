#happner protocol specification

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
#create happner client

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
creating model: 
[object Object]
#connect happner client to happner server

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
creating model: 
[object Object]
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
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
  }
}
```
#subscribe to mesh event

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
creating model: 
[object Object]
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
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
  }
}
```
###client -> server
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
      "modified": 1496670748610,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "get"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "consistency": 2,
    "publicationId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7-7"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
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
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
    "action": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-15"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
#disconnect from happner server

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
creating model: 
[object Object]
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
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
  }
}
```
###client -> server
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
      "modified": 1496670748610,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "get"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "consistency": 2,
    "publicationId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7-7"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
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
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
    "action": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-15"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "disconnect"
  }
}
```
#stopping happner server

##PROTOCOL VERSION: undefined
###HAPPNER VERSION: 2.14.2
####RUN: 2017 June 05 03:52
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "b5c8d770-997c-448d-bff2-2c87c17269b3",
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
###client -> server
```json
{
  "action": "set",
  "eventId": 4,
  "path": "/test/write",
  "data": {
    "can": "can"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "can": "can"
  },
  "_meta": {
    "created": 1495708248824,
    "modified": 1496670748242,
    "path": "/test/write",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 4,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 5,
  "path": "/mesh/schema/description",
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {
    "initializing": true,
    "name": "TestNode",
    "components": {}
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748309,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 5,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748315,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 6,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 7,
  "path": "/SET@/_exchange/requests/TestNode/security/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 8,
  "path": "/SET@/_exchange/requests/TestNode/api/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 9,
  "path": "/SET@/_exchange/requests/TestNode/system/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 2,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 10,
  "path": "/SET@/_exchange/requests/TestNode/rest/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 3,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 11,
  "path": "/SET@/_exchange/requests/TestNode/componentName/*",
  "data": null,
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 4,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 7,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 8,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 9,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 10,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 11,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "on"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 12,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
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
    }
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
    }
  },
  "_meta": {
    "created": 1495708248885,
    "modified": 1496670748659,
    "path": "/mesh/schema/config",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 13,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
creating model: 
[object Object]
###client -> server
```json
{
  "action": "configure-session",
  "eventId": 1,
  "data": {
    "protocol": "happn_1.3.0"
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 1,
    "action": "configure-session"
  }
}
```
###client -> server
```json
{
  "action": "describe",
  "eventId": 2
}
```
###server -> client
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
  }
}
```
###client -> server
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
###server -> client
```json
{
  "data": {
    "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
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
  }
}
```
###client -> server
```json
{
  "action": "get",
  "eventId": 4,
  "path": "/mesh/schema/description",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
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
      "modified": 1496670748610,
      "path": "/mesh/schema/description",
      "published": true,
      "type": "response",
      "status": "ok",
      "eventId": 12,
      "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
      "action": "set"
    }
  },
  "_meta": {
    "created": 1495708248883,
    "modified": 1496670748610,
    "path": "/mesh/schema/description",
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 4,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "get"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 5,
  "path": "/SET@/_events/TestNode/componentName/event/name",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "meta": {
      "componentVersion": "^1.0.0"
    },
    "count": 0,
    "listenerId": 0,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 5,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "on",
  "eventId": 6,
  "path": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
  "data": null,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "event_type": "set",
    "count": 0,
    "listenerId": 1,
    "refCount": 1,
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": {},
  "_meta": {
    "status": "ok",
    "type": "response",
    "published": false,
    "eventId": 6,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "on"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 7,
  "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "channel": "/SET@/_exchange/requests/TestNode/componentName/*",
    "action": "/SET@/_exchange/requests/TestNode/componentName/causeEventMethod",
    "type": "data",
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "consistency": 2,
    "publicationId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7-7"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "callbackAddress": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "args": [],
    "origin": {
      "id": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7"
    }
  },
  "_meta": {
    "path": "/_exchange/requests/TestNode/componentName/causeEventMethod",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 7,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 14,
  "path": "/_events/TestNode/componentName/event/name",
  "data": {
    "key": "value"
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "noStore": true,
    "meta": {
      "componentVersion": "1.0.0"
    },
    "timeout": 60000
  }
}
```
###client -> server
```json
{
  "action": "set",
  "eventId": 15,
  "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
  "data": {
    "status": "ok",
    "args": [
      null,
      {
        "key": "value"
      }
    ]
  },
  "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
  "options": {
    "timeout": 10000,
    "noStore": true
  }
}
```
###server -> client
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
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-14",
    "componentVersion": "1.0.0"
  },
  "__outbound": true
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "channel": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/*",
    "action": "/SET@/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "type": "data",
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "consistency": 2,
    "publicationId": "b5c8d770-997c-448d-bff2-2c87c17269b3-15"
  },
  "__outbound": true
}
```
###server -> client
```json
{
  "data": {
    "key": "value"
  },
  "_meta": {
    "path": "/_events/TestNode/componentName/event/name",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 14,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###server -> client
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
    "path": "/_exchange/responses/0b5fd224-a81b-4ae9-a277-8a7b301d74b7/TestNode/componentName/causeEventMethod/1",
    "published": true,
    "type": "response",
    "status": "ok",
    "eventId": 15,
    "sessionId": "b5c8d770-997c-448d-bff2-2c87c17269b3",
    "action": "set"
  }
}
```
###client -> server
```json
{
  "action": "disconnect",
  "eventId": 8,
  "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
  "options": {
    "timeout": 60000
  }
}
```
###server -> client
```json
{
  "data": null,
  "_meta": {
    "type": "response",
    "status": "ok",
    "published": false,
    "eventId": 8,
    "sessionId": "0b5fd224-a81b-4ae9-a277-8a7b301d74b7",
    "action": "disconnect"
  }
}
```
###server -> client
```json
{
  "_meta": {
    "type": "system"
  },
  "eventKey": "server-side-disconnect",
  "data": "server-side-disconnect"
}
```