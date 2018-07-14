const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
      name: 'Vladislav',
      age: 43,
      location: 'Madison'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }
      console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
  }); 