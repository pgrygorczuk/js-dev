import * as React from 'react';
import { TodoRow } from './TodoRow.js';

export function TodoList({tasks, setTasks, filter})
{
    function handleDelete(index)
    {
        setTasks( tasks.filter( (value) => {
            return value.index !== index;
        }) );
    }

    function handleEdit(index, name='')
    {
        const newTasks = tasks.map( task => {
            if( task.index === index )
                return { ...task, name: name };
            return task;
        } );
        setTasks( newTasks );
    }

    function handleCheck(index, completed)
    {
        const newTasks = tasks.map( task => {
            if( task.index === index )
                return { ...task, completed: completed };
            return task;
        } );
        setTasks( newTasks );
        //console.log(newTasks);
    }

    return (
        <React.Fragment>
            <p className="mt-4">List of tasks ({tasks.length}):</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Completed</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks
                    .filter( (value) => {
                        return (
                            filter==='all' ||
                            (value.completed && filter==='completed') ||
                            (!value.completed && filter==='not-completed'));
                    } )
                    .map( (value, index) => {
                        return <TodoRow key={index} task={value} index={index}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                            onCheck={handleCheck} />;
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}