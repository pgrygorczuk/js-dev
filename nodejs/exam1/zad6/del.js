const fs   = require('fs');
const load = require('./load.js');

async function del(task_id)
{
    task_id -= 1;
    load.load().then( (data) => {
        if( task_id < 0 || task_id >= data.length ){
            console.error("Podano nieprawidłowe ID");
            return;
        }
        data.splice( task_id, 1 );
        fs.writeFile('todo-list.txt', data.join("\n")+"\n", (error) => {
            if( error )
                console.error( error );
            else
                console.log('Zadanie usunięto pomyślnie.');
        });
    } );
}

module.exports = {
    del: del,
};