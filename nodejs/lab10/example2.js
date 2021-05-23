require('dotenv').config();
const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(
    process.env.MONGODB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {

    const tasksCollection = client.db('dbtest').collection('tasks');
    const tasks = await tasksCollection.find().toArray();
    console.table(tasks);

    app.post('/tasks', async (req, res) => {

    });

    app.delete('/tasks', async (req, res) => {

    });

    app.get('/tasks', async (req, res) => {
        const tasksCollection = client.db('dbtest').collection('tasks');
        const tasks = await tasksCollection.find().toArray();
        res.send(tasks);
    })

    app.get('/heartbeat', async (req, res) => {
        res.send(new Date());
    });
    
    app.listen(process.env.PORT);
});



