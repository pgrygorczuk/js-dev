require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_CONNECTION;

let db;

const init = () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( client => {
        db = client.db('dbtest');
    });
}

const getTasks = () => {
    const tasksCollection = db.collection('tasks');
    return tasksCollection.find().toArray();
}

const getTask = (id) => {
    const tasksCollection = db.collection('tasks');
    return tasksCollection.findOne({ _id: new ObjectId(id) });
}

const deleteTask = (id) => {
    const tasksCollection = db.collection('tasks');
    return tasksCollection.deleteOne({ _id: new ObjectId(id) });
}

const addTask = (newTask) => {
    const tasksCollection = db.collection('tasks');
    tasksCollection.insertOne({
        ...newTask,
        createdTime: new Date(),
    });
}

const updateTask = (id, modifiedTask) => {
    const tasksCollection = db.collection('tasks');
    return tasksCollection.updateOne({ _id: new ObjectId(id) }, {
        $set: { "complete": modifiedTask.complete }
    });
}

module.exports = { init, getTasks, getTask, addTask, deleteTask, updateTask };
