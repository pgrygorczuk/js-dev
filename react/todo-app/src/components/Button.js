import * as React from 'react';

export function Button({onClick, iconClass, text})
{
    // Dodaje spacje miedzy ikonka a tekstem.
    if(iconClass && text){
        text = ' ' + text;
    }

    return (
        <button className="btn btn-outline-dark mx-1" onClick={onClick}>
            {iconClass?
                <i className={iconClass}></i> :'' }
            {text? text : ''}
        </button>
    );
}
