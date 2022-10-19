var AWS = require('aws-sdk');
let awsConfig = {
  region: '',
  endpoint: '',
  accessKeyId: '',
  secretAccessKey: '',
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {
  var params = {
    TableName: 'User',
    Key: {
      id: '',
    },
  };

  docClient.delete(params, function (err, data) {
    if (err) {
      console.log('users::delete::error - ' + JSON.stringify(err, null, 2));
    } else {
      console.log('users::delete::success');
    }
  });
};

remove();
