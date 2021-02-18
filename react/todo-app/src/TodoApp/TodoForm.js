import * as React from 'react';

export function TodoForm({onAdd})
{
    const [name, setName] = React.useState('');

    function handleChange(e){
        setName( e.target.value );
    }

    function handleClick()
    {
        onAdd(name);
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