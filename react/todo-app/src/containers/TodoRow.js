import * as React from 'react';
import { Button } from '../components/Button.js';

export function TodoRow({task, index, onDelete, onEdit, onCheck})
{
    const [editMode, setEditMode] = React.useState(false);

    function handleKeyPress(e){
        if( e.key === 'Enter' ){
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
                <Button iconClass="bi bi-pencil" onClick={e => setEditMode(!editMode)} />
                <Button iconClass="bi bi-trash" onClick={e => onDelete(task.index)} />
            </td>
        </tr>
    );
}