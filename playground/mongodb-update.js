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

    // Find one and update
    db.collection('Todos')
      .findOneAndUpdate(
        // find the field to update by its ID
        { _id: new ObjectID('9dh39df9w9fe23edfsdf9e') },
        // include update operator to set "completed" to new value
        { $set: { completed: true } },
        // and also increment "age" value by one
        { $inc: { age: 1 }},
        // do not return original (old) field
        { returnOriginal: false }
      )
      .then((result) => {
        console.log(result);
      }, (err) => {
        console.log('Unable to update', err)
      }
    );

    //client.close();
  }); 