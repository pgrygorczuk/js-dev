import * as React from 'react';
import './App.css';


function App()
{
    const [name, setName] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    function handleChange(e){
        setName( e.target.value );
    }

    function handleAdd()
    {
        setTasks( [...tasks, name] );
        setName('');
    }

    function handleDelete(index)
    {
        setTasks( tasks.filter((value, _index) => {
            return _index != index;
        }) );
    }

    return (
        <React.Fragment>

            <input id="todo" value={name} onChange={e => handleChange(e)} />
            <button onClick={handleAdd}>Add</button>
            
            <table>
                <tr><th>ID</th><th>Name</th><th>Actions</th></tr>
                {tasks.map( (value, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{value}</td>
                            <td>
                                <button onClick={e => handleDelete(index)}>X</button>
                            </td>
                        </tr>
                    );
                })}
            </table>

        </React.Fragment>
    );
}

export default App;
