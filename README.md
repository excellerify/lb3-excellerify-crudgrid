## lb3-excellerify-crudgrid-mixin

Loopback 3 mixin for excellerify CRUD Grid endpoint and schema resolver.

### Installation

In your LoopBack project: \
 $ npm install --save lb3-excellerify-crudgrid-mixin

### Server Config
Add the mixins property to your server/model-config.json:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/lb3-excellerify-crudgrid-mixin",
      "../common/mixins"
    ]
  }
}
```

### Model Config

```json
...
"mixins": {
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
      "grid": false
    }
  },
...
```
