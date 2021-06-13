require('dotenv').config();

// Mongoose example

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});

// Creates model
const Task = mongoose.model('mongooseTasks', {
    description: String,
    createdTime: Date,
    completed: {
        type: Boolean,
        default: false,
    },
})

(async () => {
    const newTask = new Task({
        description: "Opis taska.",
        createdTime: new Date(),
        //completed: false, // We have default value.
    });

    // Insert task.
    await newTask.save();

    // Update task.
    newTask.completed = true;
    await newTask.save();

    // Select.
    await Task.find({
        completed: true,
    });

})();
