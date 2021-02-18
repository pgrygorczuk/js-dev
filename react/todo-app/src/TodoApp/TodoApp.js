import * as React from 'react';
import { TodoFilter } from './TodoFilter.js';
import { TodoForm } from './TodoForm.js';
import { TodoList } from './TodoList.js';

export function TodoApp()
{
    // task -> { name: '', completed: '' }
    const [tasks, setTasks] = React.useState([]);
    const [filter, setFilter] = React.useState('all');

    function handleAdd(name)
    {
        if( Boolean(name) )
            setTasks( [...tasks, {index: Date.now(), name: name, completed: false}] );
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={handleAdd}  />
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList tasks={tasks} setTasks={setTasks} filter={filter} />
        </React.Fragment>
    );
}
