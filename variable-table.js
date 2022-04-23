//variable Table.js
const AWS = require("aws-sdk");
AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();
var params = {
    TableName : "variables",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
        { AttributeName: 'sk', KeyType: 'RANGE' }, //Sort key
],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N" },
        { AttributeName: 'sk', AttributeType: 'S' },
],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};
dynamodb.deleteTable({ TableName: "variables" }).promise();
dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Error JSON.", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table.", JSON.stringify(data, null, 2));
    }
});