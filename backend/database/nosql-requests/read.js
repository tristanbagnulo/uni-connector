//Source of code - copied from video https://www.youtube.com/watch?v=SU4dZ-qgR1Y as 3:57

var AWS = require('aws-sdk');
let awsConfig = {
  region: '',
  endpoint: '',
  accessKeyId: '',
  secretAccessKey: '',
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function () {
  var params = {
    TableName: 'User',
    Key: {
      id: '',
    },
  };
  docClient.get(params, function (err, data) {
    if (err) {
      console.log(
        'User::fetchOneByKey::error - ' + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        'User::fetchOneByKey::success - ' + JSON.stringify(data, null, 2)
      );
    }
  });
};

fetchOneByKey();
