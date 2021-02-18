import * as React from 'react';

export function TodoFilter({filter, setFilter})
{
    function handleChange(e)
    {
        setFilter(e.target.value);
    }

    return (
        <React.Fragment>
            <label for="filterSelect" className="mt-2">Filter tasks</label>
            <select id="filterSelect" className="form-select"
                onChange={e => handleChange(e)} value={filter}>
                <option value="all">Show all</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not completed</option>
            </select>
        </React.Fragment>
    );
}