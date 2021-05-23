require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {
    const collectionTasks = client.db("mydatabase").collection("tasks");

    // Wyszukiwanie rekordow.
    // MONGO: find({ completed: false })
    // SQL: SELECT * FROM collectionTasks WHERE completed = false;
    const findResult = await collectionTasks.find({ completed: false }).toArray();
    console.table(findResult);

    // Dodawanie rekordow
    let addResult = await collectionTasks.insertOne({
        name: "my task from Node.js APP",
        completed: true,
    });
    console.log(addResult);

    // Dodanie ze zdefiniowanym _id. Wymagane 12 bajtow, albo 24 hex.
    addResult = await collectionTasks.insertOne({
        name: "my document with custom ID",
        completed: true,
        _id: new ObjectId("aaaaaaaaaaaaaaaaaaaaaaaa"),
    });

    // Dodanie wielu obiektow - argumentem jest tablica obiektow.
    addResult = await collectionTasks.insertMany([
        {name: "Example task 1", completed: true},
        {name: "Example taks 2", completed: true},
    ]);

    client.close();
});

