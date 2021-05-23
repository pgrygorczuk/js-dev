require('dotenv').config();
const express = require('express');
const app = express();
const { init, getTasks, addTask, deleteTask, updateTask } = require('./db');

app.use(express.json()); // Middleware do odczytu z body requesta.

init().then( () => {

    app.delete('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const result = await deleteTask(id);
        if(result.deletedCount == 1){
            res.statusCode = 204; // No content.
        }
        res.statusCode = 404;
        res.send();
    });

    app.post('/tasks', async (req, res) => {
        const newPost = req.body;
        const result = await addTask(newPost);
        if(result.insertedCount === 1){
            res.statusCode = 201;
        }
        else{
            res.statusCode = 500;
        }
        res.send();
    });

    app.put('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const modifiedTask = req.body;
        const result = await updateTask(id, updateTask);
        if(result.modifiedCount === 1){
            res.statusCode = 200;
        }
        else if(result.matchedCount === 1){
            res.statusCode = 409; // Conflict.
        }
        else{
            res.statusCode = 404;
        }
        res.send();
    });

    app.get('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const task = await getTasks(id);
        if(task){
            res.send(task);
        }
        res.statusCode = 404;
        res.send(task);
    });
    
    app.get('/tasks', async (req, res) => {
        const tasks = await getTask();
        res.send(tasks);
    });
    
    app.get('/heartbeat', async (req, res) => {
        res.send(new Date());
    });
    
    app.listen(process.env.PORT);

});
