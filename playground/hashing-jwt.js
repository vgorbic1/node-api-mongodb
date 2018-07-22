const jwt = require('jsonwebtoken');

var data = {
  id: 10
}

var token = jwt.sign(data, '123abc');
console.log('token: ' + token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded: ' + JSON.stringify(decoded));