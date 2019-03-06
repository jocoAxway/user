var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('user', {
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "zipcode": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;