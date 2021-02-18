import * as React from 'react';

export function TodoRow({task, index, onDelete, onEdit, onCheck})
{
    const [editMode, setEditMode] = React.useState(false);

    function handleKeyPress(e)
    {
        if( e.key === 'Enter' )
        {
            setEditMode(false);
        }
    }

    return (
        <tr key={index}>
            <td>{index+1}.</td>
            <td>
                <input type="checkbox"
                    checked={task.completed}
                    onChange={e => onCheck(task.index, e.target.checked)} />
                {/* {task.index} */}
            </td>
            <td>
                {editMode ?
                    <input type="text" value={task.name}
                        onChange={e => onEdit(task.index, e.target.value)}
                        onKeyPress={e => handleKeyPress(e)} />
                    :
                    task.name
                }
            </td>
            <td>
                <button className="btn btn-outline-dark mx-1" onClick={e => setEditMode(!editMode)}>
                    <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-outline-dark" onClick={e => onDelete(task.index)}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );
}