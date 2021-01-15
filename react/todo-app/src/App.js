import * as React from 'react';
import './App.css';

function TodoList(props)
{
    function handleDelete(index)
    {
        props.setTasks( props.tasks.filter((value, _index) => {
            return _index !== index;
        }) );
    }

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            {props.tasks.map( (value, index) => {
                return (
                    <tr key={index}>
                        <td>{index+1}.</td>
                        <td>{value}</td>
                        <td>
                            <button onClick={e => handleDelete(index)}>X</button>
                        </td>
                    </tr>
                );
            })}
        </table>
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
            <input id="todo" value={name} onChange={e => handleChange(e)} />
            <button onClick={handleClick}>Add</button>
        </React.Fragment>
    );
}

function App()
{
    const [tasks, setTasks] = React.useState([]);

    function handleAdd(name)
    {
        if( Boolean(name) )
            setTasks( [...tasks, name] );
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={handleAdd}  />
            <TodoList tasks={tasks} setTasks={setTasks} />
        </React.Fragment>
    );
}

export default App;
