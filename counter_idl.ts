export type Counter = 
{
    "version": "0.1.0",
    "name": "counter_anchor",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "programId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "increase",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "increment",
            "type": "u64"
          }
        ]
      },
      {
        "name": "decrease",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "decrement",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "AccessPda",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "programId",
              "type": "publicKey"
            },
            {
              "name": "buyer",
              "type": "publicKey"
            },
            {
              "name": "accessPdaBump",
              "type": "u8"
            },
            {
              "name": "expiresAt",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "Counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            }
          ]
        }
      }
    ]
  }

export const IDL : Counter = 

{
    "version": "0.1.0",
    "name": "counter_anchor",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "programId",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "increase",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "increment",
            "type": "u64"
          }
        ]
      },
      {
        "name": "decrease",
        "accounts": [
          {
            "name": "counterAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "accessPda",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "decrement",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "AccessPda",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "programId",
              "type": "publicKey"
            },
            {
              "name": "buyer",
              "type": "publicKey"
            },
            {
              "name": "accessPdaBump",
              "type": "u8"
            },
            {
              "name": "expiresAt",
              "type": "i64"
            }
          ]
        }
      },
      {
        "name": "Counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            }
          ]
        }
      }
    ]
  }