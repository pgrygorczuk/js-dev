import * as React from 'react';
import './App.css';

function TodoRow({task, index, onDelete, onCheck})
{
    return (
        <tr key={index}>
            <td>{index+1}.</td>
            <td>
                <input type="checkbox"
                    value={task.completed}
                    onChange={e => onCheck(index, e.target.value)} />
            </td>
            <td>{task.name}</td>
            <td>
                <button className="btn btn-outline-dark mx-1">
                    <i class="bi bi-pencil"></i>
                </button>
                <button className="btn btn-outline-dark" onClick={e => onDelete(index)}>
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );
}

function TodoFilter()
{
    return (
        <React.Fragment>
            <label for="filterSelect" className="mt-2">Filter tasks</label>
            <select id="filterSelect" className="form-select">
                <option value="all">Show all</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not completed</option>
            </select>
        </React.Fragment>
    );
}

function TodoList({tasks, setTasks})
{
    function handleDelete(index)
    {
        setTasks( tasks.filter((value, _index) => {
            return _index !== index;
        }) );
    }

    function handleEdit(index, name)
    {

    }

    function handleCheck(index, completed)
    {
        const newTasks = tasks.map( task => {
            if( task.index == index )
                return { ...task, completed: completed };
            return task;
        } );
        setTasks( newTasks );
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
                    {tasks.map( (value, index) => {
                        return <TodoRow task={value} index={index} onDelete={handleDelete} onCheck={handleCheck} />;
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}

function TodoForm(props)
{
    const [name, setName] = React.useState('');

    function handleChange(e){
        setName( e.target.value );
    }

    function handleClick()
    {
        props.onAdd(name);
        setName('');
    }

    return (
        <React.Fragment>
            <label for="task_input">Add new task</label>
            <div className="input-group">
                <input id="task_input" className="form-control" value={name} onChange={e => handleChange(e)} />
                <button className="btn btn-outline-dark" onClick={handleClick}>
                    Add
                </button>
            </div>
        </React.Fragment>
    );
}

function App()
{
    // task -> { name: '', completed: '' }
    const [tasks, setTasks] = React.useState([]);

    //TODO: repair task.index
    //npm start --open
    function handleAdd(name)
    {
        if( Boolean(name) )
            setTasks( [...tasks, {index: tasks.length, name: name, completed: false}] );
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={handleAdd}  />
            <TodoFilter />
            <TodoList tasks={tasks} setTasks={setTasks} />
        </React.Fragment>
    );
}

export default App;
