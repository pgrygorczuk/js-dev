const fs = require('fs');

async function add(task)
{
    try{
        fs.appendFile('todo-list.txt', task+"\n", 'utf-8', (error) => {
            console.log("Nowe zadanie zostało dodane.");
        });
    }catch(error){
        console.error( error );
    }
}

module.exports = {
    add: add,
};
