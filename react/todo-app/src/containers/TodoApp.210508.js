import * as React from 'react';
import { TodoForm } from './TodoForm.js';
import { TodoList } from './TodoList.js';

export function TodoApp()
{
    function readFromLS(key, defaultValue){
        const item = localStorage.getItem(key);
        if(item){
            return JSON.parse(item);
        }
        return defaultValue;
    }

    //localStorage.getItem, setItem, removeItem
    function saveToLS(key, value){
        localStorage.setItem( key, JSON.stringify(value) );
    }

    function downloadTasks(){
        let lastId = 0;
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then( (response) => response.json() )
            .then( (data) => { // id, title, completed
                data = data.map( (item) => {
                    return {...item, name: item.title};
                } );
            } );
    }

    // task -> { name: '', completed: '' }
    //const [tasks, setTasks] = React.useState( readFromLS('tasks', []) );
    const [tasks, setTasks] = React.useState( readFromLS('tasks', downloadTasks()) );
    const [filter, setFilter] = React.useState( readFromLS('filter', 'all') );
    //const [lastId, setLastId] = 
    
    React.useEffect( () => {
        saveToLS( 'tasks', tasks );
    }, [tasks]); // pusta lista dziala jak -> componentDidMount

    React.useEffect( () => {
        saveToLS( 'filter', filter );
    }, [filter]);

    React.useEffect( () => {

    }, [] );

    function handleAdd(name)
    {
        if( Boolean(name) )
            setTasks( [...tasks, {index: Date.now(), name: name, completed: false}] );
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={handleAdd} filter={filter} setFilter={setFilter}  />
            <TodoList tasks={tasks} setTasks={setTasks} filter={filter} />
        </React.Fragment>
    );
}
