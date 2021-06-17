import * as React from 'react';
import { Button } from '../components/Button.js';
import { Link } from "react-router-dom";


export function TodoRow({task, index, onDelete, onEdit, onCheck})
{
    const initialState = {
        editMode: false,
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
            case 'TOGGLE_COMPLETED':
                onCheck(action.payload.index, action.payload.completed);
                return state;
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <tr key={index}>
            <td>{index+1}.</td>
            <td>
                <input type="checkbox"
                    checked={task.completed}
                    onChange={e => dispatch({
                        type: 'TOGGLE_COMPLETED',
                        payload: {
                            index: task.index,
                            completed: e.target.checked
                        }
                    })} />
                {/* {task.index} */}
            </td>
            <td>
                {state.editMode ?
                    <input type="text" value={task.name}
                        onChange={e => onEdit(task.index, e.target.value)}
                        onKeyPress={e => e.key==='Enter'? dispatch({ type: 'EDIT', payload: false }) : undefined} />
                    :
                    task.name
                }
            </td>
            <td className="d-flex">
                <Link to={ `/task/${task.index}` }>
                    <Button iconClass="bi bi-info-circle" />
                </Link>
                <Button iconClass="bi bi-pencil" onClick={ e => dispatch({ type: 'EDIT', payload: !state.editMode }) } />
                <Button iconClass="bi bi-trash" onClick={ e => dispatch({ type: 'DELETE', payload: task.index }) } />
            </td>
        </tr>
    );
}