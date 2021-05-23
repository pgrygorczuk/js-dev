require('dotenv').config();
const express = require('express');
const app = express();
const { init, getTasks } = require('./db');


init().then( () => {

    app.post('/tasks', async (req, res) => {

    });

    app.delete('/tasks', async (req, res) => {

    });

    app.get('/tasks', async (req, res) => {
        const tasks = await getTasks();
        res.send(tasks);
    })

    app.get('/heartbeat', async (req, res) => {
        res.send(new Date());
    });
    
    app.listen(process.env.PORT);
    
});



