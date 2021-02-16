const apidoc = {
  "openapi": "3.0.0",
  "info": {
    "title": "PINUS Server",
    "version": "1.0.0",
    "description": "The backend service for PINUS website"
  },
  "paths": {
    "/heartbeat/": {
      "get": {
        "tags": [
          "Heartbeat"
        ],
        "summary": "Tests the API flow",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HeartbeatApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/heartbeat/db": {
      "get": {
        "tags": [
          "Heartbeat"
        ],
        "summary": "Tests the database connection",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DbHeartbeatApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/sample/": {
      "get": {
        "tags": [
          "Sample"
        ],
        "summary": "Lists samples",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IndexSampleApiResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Sample"
        ],
        "summary": "Creates a sample",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SampleCreationData"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSampleApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/sample/{id}": {
      "get": {
        "tags": [
          "Sample"
        ],
        "summary": "Retrieves a sample",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetSampleApiResponse"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Sample"
        ],
        "summary": "Updates a sample",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SampleCreationData"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSampleApiResponse"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Sample"
        ],
        "summary": "Deletes a sample",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteSampleApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/users/": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Lists users",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IndexUserApiResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users"
        ],
        "summary": "Creates a user",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCreationData"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/users/{uid}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Retrieves a user",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetUserApiResponse"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Users"
        ],
        "summary": "Updates a user",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCreationData"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateUserApiResponse"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Users"
        ],
        "summary": "Deletes a user",
        "responses": {
          "200": {
            "description": "Request is processed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteUserApiResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "BaseModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "Sample": {
        "allOf": [
          {
            "$ref": "#/components/schemas/BaseModel"
          },
          {
            "$ref": "#/components/schemas/SampleCreationData"
          }
        ]
      },
      "SampleCreationData": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "FirebaseUser": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "email": {
            "type": "string"
          }
        }
      },
      "FirebaseUserCreationData": {
        "type": "object",
        "properties": {
          "displayName": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string",
            "format": "password"
          }
        }
      },
      "BaseError": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      "HeartbeatResponse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ApiResponse"
          },
          {
            "properties": {
              "data": {
                "$ref": "#/components/schemas/HeartbeatData"
              }
            }
          }
        ]
      },
      "HeartbeatApiResponse": {
        "$ref": "#/components/schemas/HeartbeatResponse"
      },
      "DbHeartbeatApiResponse": {
        "$ref": "#/components/schemas/HeartbeatResponse"
      },
      "ApiResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "data": {
            "type": "object"
          },
          "error": {
            "$ref": "#/components/schemas/BaseError"
          }
        }
      },
      "SampleResponse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ApiResponse"
          },
          {
            "properties": {
              "data": {
                "$ref": "#/components/schemas/Sample"
              }
            }
          }
        ]
      },
      "SamplesResponse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ApiResponse"
          },
          {
            "properties": {
              "data": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Sample"
                }
              }
            }
          }
        ]
      },
      "IndexSampleApiResponse": {
        "$ref": "#/components/schemas/SamplesResponse"
      },
      "CreateSampleApiResponse": {
        "$ref": "#/components/schemas/SampleResponse"
      },
      "GetSampleApiResponse": {
        "$ref": "#/components/schemas/SampleResponse"
      },
      "UpdateSampleApiResponse": {
        "$ref": "#/components/schemas/SampleResponse"
      },
      "DeleteSampleApiResponse": {
        "$ref": "#/components/schemas/SampleResponse"
      },
      "UserResponse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ApiResponse"
          },
          {
            "properties": {
              "data": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        ]
      },
      "UsersResponse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ApiResponse"
          },
          {
            "properties": {
              "data": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          }
        ]
      },
      "IndexUserApiResponse": {
        "$ref": "#/components/schemas/UsersResponse"
      },
      "CreateUserApiResponse": {
        "$ref": "#/components/schemas/UserResponse"
      },
      "GetUserApiResponse": {
        "$ref": "#/components/schemas/UserResponse"
      },
      "UpdateUserApiResponse": {
        "$ref": "#/components/schemas/UserResponse"
      },
      "DeleteUserApiResponse": {
        "$ref": "#/components/schemas/UserResponse"
      },
      "HeartbeatData": {
        "type": "object",
        "properties": {
          "status": {
            "type": "string",
            "values": [
              "UP",
              "DOWN"
            ]
          },
          "detail": {
            "type": "string"
          }
        }
      },
      "User": {
        "$ref": "#/components/schemas/FirebaseUser"
      },
      "UserCreationData": {
        "$ref": "#/components/schemas/FirebaseUserCreationData"
      }
    }
  },
  "tags": []
}