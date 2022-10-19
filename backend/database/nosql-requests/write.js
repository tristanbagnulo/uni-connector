var AWS = require('aws-sdk');
let awsConfig = {
  region: '',
  endpoint: '',
  accessKeyId: '',
  secretAccessKey: '',
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {
  var input = {
    id: '',
  };

  var params = {
    TableName: 'User',
    Item: input,
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.log('users::save::error - ' + JSON.stringify(err, null, 2));
    } else {
      console.log('users::save::success');
    }
  });
};

save();
