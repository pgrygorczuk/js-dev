import * as React from 'react';

export function Select({id, label, value, options, onChange})
{
    return (
        <React.Fragment>
            <label htmlFor={id} className="mt-2">{label}</label>
            <select id={id} className="form-select"
                onChange={onChange} value={value}>
                {options.map( value => {
                    return <option key={value[0]} value={value[0]}>{value[1]}</option>;
                })}
            </select>
        </React.Fragment>
    );
}