import * as React from 'react';
import { Button } from '../components/Button.js';


export function TodoRow({task, index, onDelete, onEdit, onCheck})
{
    const initialState = {
        editMode: false
    };

    function reducer(state, action){
        //console.log( state, action );
        switch(action.type){
            case 'EDIT':
                return {
                    ...state,
                    editMode: action.payload,
                };
            case 'DELETE':
                onDelete(action.payload);
                return state;
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    function edit(){
        dispatch({ type: 'EDIT', payload: !state.editMode });
    }

    function del(index){
        dispatch({ type: 'DELETE', payload: index });
    }

    //console.log(state);

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
                {state.editMode ?
                    <input type="text" value={task.name}
                        onChange={e => onEdit(task.index, e.target.value)}
                        onKeyPress={e => e.key==='Enter'? dispatch({ type: 'EDIT' }) : undefined} />
                    :
                    task.name
                }
            </td>
            <td>
                <Button iconClass="bi bi-pencil" onClick={ e => edit() } />
                <Button iconClass="bi bi-trash" onClick={ e => del(task.index) } />
                {/* <Button iconClass="bi bi-pencil" onClick={e => setEditMode(!editMode)} />
                <Button iconClass="bi bi-trash" onClick={e => onDelete(task.index)} /> */}
            </td>
        </tr>
    );
}