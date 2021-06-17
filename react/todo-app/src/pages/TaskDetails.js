import React from 'react';
import { Button } from '../components/Button.js';
import { useParams, useHistory } from 'react-router-dom';

function TaskDetails(){

    const { id } = useParams();
    const history = useHistory();

    const task = JSON.parse(window.localStorage.getItem('tasks'))
                .filter( value => value.index === +id )[0];

    return (
        <React.Fragment>
            <h1>Task details</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Index</th>
                        <td>{task.index}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{task.name}</td>
                    </tr>
                    <tr>
                        <th>Completed</th>
                        <td>{String(task.completed)}</td>
                    </tr>
                </tbody>
            </table>
            <Button text="Go back" onClick={ e => { history.replace('/tasks') } } />
        </React.Fragment>
    );
}

export default TaskDetails;
