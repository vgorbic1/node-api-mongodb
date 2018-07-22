const {SHA256} = require('crypto-js');

var message = 'I am user number 3'
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hadh: ${hash}`);

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'secret').toString()
}

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

if (resultHash === token.hash) {
  console.log('data was not changed');
} else {
  console.log('data was changed!');
}
