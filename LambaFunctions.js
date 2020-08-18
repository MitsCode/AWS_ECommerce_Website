// GETS ALL ITEMS
/*
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseBody = "";
    let statusCode = 0;
    
    const params = {
        TableName: "Products",
    };
    
    try {
        const data = await documentClient.scan(params).promise();
        responseBody = JSON.stringify(data.Items);
        statusCode = 200;
    } catch (err) {
        responseBody = 'Unable to get products: ${err}';
        statusCode = 403;
    }
    
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
    
    return response;
    
};
*/

//DELETES ROW IN DATABASE
/*
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseBody = "";
    let statusCode = 0;
    
    const { id } = event.pathParameters;
    
    const params = {
        TableName: "Products",
        Key: {
            id: id
        }
    };
    
    try {
        const data = await documentClient.delete(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204;
    } catch (err) {
        responseBody = `Unable to delete product: ${err}`;
        statusCode = 403;
    }
    
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
    
    return response;
    
};
*/

// ADDS ROW TO DATABASE
/*
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseBody = "";
    let statusCode = 0;
    
    const { id, productname } = JSON.parse(event.body);
    
    const params = {
        TableName: "Products",
        Item: {
            id: id,
            productname: productname
        }
    };
    
    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = 'Unable to put product: ${err}';
        statusCode = 403;
    }
    
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
    
    return response;
    
};
*/

// UPDATES RECORD IN DATABASE
/*
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseBody = "";
    let statusCode = 0;
    
    const { id, productname } = JSON.parse(event.body);
    
    const params = {
        TableName: "Products",
        Key: {
            id: id
        },
        UpdateExpression: "set productname = :n",
        ExpressionAttributeValues: {
            ":n": productname
        },
        ReturnValues: "UPDATED_NEW"
    };
    
    try {
        const data = await documentClient.update(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204;
    } catch (err) {
        responseBody = `Unable to update product: ${err}`;
        statusCode = 403;
    }
    
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    };
    
    return response;
};







*/
