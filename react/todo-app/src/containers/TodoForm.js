import * as React from 'react';
import { Button } from '../components/Button.js';
import { Input } from '../components/Input.js';
import { Select } from '../components/Select.js';

export function TodoForm({onAdd, filter, setFilter, isDataLoaded})
{
    const [name, setName] = React.useState('');

    function handleClick()
    {
        onAdd(name);
        setName('');
    }

    const options = [
        ["all", "Show all"],
        ["completed", "Completed"],
        ["not-completed", "Not completed"],
    ];

    return (
        <React.Fragment>
            <div className="d-flex">
                <Input id="task_input" label="Add new task" value={name}
                        onChange={e => setName(e.target.value)}
                        isDataLoaded={isDataLoaded} />
                <Button text="Add" onClick={handleClick} />
            </div>
            <Select id="filterSelect" label="Filter tasks" value={filter}
                onChange={e => setFilter(e.target.value)} options={options} />
        </React.Fragment>
    );
}