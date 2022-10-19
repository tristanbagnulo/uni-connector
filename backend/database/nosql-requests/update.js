var AWS = require('aws-sdk');
let awsConfig = {
  region: '',
  endpoint: '',
  accessKeyId: '',
  secretAccessKey: '',
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {
  var params = {
    TableName: 'User',
    Key: { id: '' },
    UpdateExpression: 'Set updated_by = :byUser, is_deleted = :boolValue',
    ExpressionAttributeValues: {
      ':byUser': 'updateUser',
      ':boolValue': true,
    },
    Returnvalues: 'UPDATED_NEW',
  };

  docClient.get(params, function (err, data) {
    if (err) {
      console.log('User::update::error - ' + JSON.stringify(err, null, 2));
    } else {
      console.log('User::update::success - ' + JSON.stringify(data, null, 2));
    }
  });
};

modify();
