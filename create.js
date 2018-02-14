let AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	let params = {
		Item : {
			"id" : event.id,
			"name" : event.name,
			"description": event.description
			
		},
		TableName : "Recipes"
	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}
