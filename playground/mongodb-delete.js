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

    // Delete many
    // db.collection('Todos')
    //   .deleteMany({text: 'Eat lunch'})
    //   .then((result) => {
    //     console.log(result);
    //   }, (err) => {
    //     console.log('Unable to delete', err)
    //   }
    // );

    // Delete one
    // db.collection('Todos')
    //   .deleteOne({text: 'Eat lunch'})
    //   .then((result) => {
    //     console.log(result);
    //   }, (err) => {
    //     console.log('Unable to delete', err)
    //   }
    // );

    // Find one and delete
    db.collection('Todos')
      .findOneAndDelete({completed: true})
      .then((result) => {
        console.log(result);
      }, (err) => {
        console.log('Unable to delete', err)
      }
    );


    //client.close();
  }); 