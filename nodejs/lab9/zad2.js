// https://cloud.mongodb.com/
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// W przypadku bledu '[...] Please reconnect' wejsc do:
// - Network Access na cloud.mongodb.com
// - usunac i dodac ponownie nasz adres IP

// Dodanie danych: clusters -> collections -> insert document

client.connect(async err => {
    const collectionTasks = client.db("mydatabase").collection("tasks");
    const findResult = await collectionTasks.find().toArray();
    console.table(findResult);

    // Pamietamy o zamknieciu polaczenia, jezeli nie bedziemy w dalszym kodzie korzystac z bazy danych.
    client.close();
});

