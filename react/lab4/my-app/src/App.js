import * as React from 'react';
import './App.css';

function Counter(props){
    const [value, setValue] = React.useState(0);
    
    function add(event){
        setValue( parseInt(value) + 1 );
    }

    function sub(event){
        setValue( parseInt(value) - 1 );
    }

    return (
        <div>
            <input value={value} />
            <button onClick={e => add(e)}>+</button>
            <button onClick={e => sub(e)}>-</button>
        </div>
    );
}

function App()
{
    return (
        <div>
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
}

export default App;
