import * as React from 'react';

export function Input({ id, label, value, onChange, isDataLoaded })
{
    const inputElement = React.useRef(null);

    React.useEffect( () => {
        if(isDataLoaded){
            inputElement.current.focus();
        }
    }, [isDataLoaded]);

    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <div className="input-group">
                <input id={id} ref={inputElement} className="form-control" value={value} onChange={onChange} />
            </div>
        </React.Fragment>
    );
}