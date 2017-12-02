## lb3-excellerify-crudgrid-mixin
Loopback 3 mixin for excellerify CRUD Grid endpoint and schema resolver.

### Installation

In your LoopBack project:
    
    $ npm install --save lb3-excellerify-crudgrid-mixin

## Using the mixin

``` json
...
"mixins": {
    ...
    "FormGrid": {
      "form": {
        "include": [
          {
            "relation": "product"
          },
          {
            "relation": "user",
            "scope": {
              "limit": 1,
              "where": { "isDeleted": true }
            }
          }
        ]
      },
      "grid": false // to disable grid
    }
    ...
  },
...
```
