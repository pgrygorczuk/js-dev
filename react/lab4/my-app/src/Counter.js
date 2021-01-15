import * as React from 'react';
import './App.css';

function Counter(props)
{
    function add(event){
        props.setValue( props.value + 1 );
    }

    function sub(event){
        props.setValue( props.value - 1 );
    }

    function handleChange(){}

    return (
        <div>
            <input value={props.value} onChange={handleChange} />
            <button onClick={e => add(e)}>+</button>
            <button onClick={e => sub(e)}>-</button>
        </div>
    );
}

function App()
{
    const [value1, setValue1] = React.useState(1);
    const [value2, setValue2] = React.useState(2);
    const [value3, setValue3] = React.useState(3);

    function handleClick( increment )
    {
        setValue1( value1 + increment );
        setValue2( value2 + increment );
        setValue3( value3 + increment );
    }

    return (
        <div>
            <Counter value={value1} setValue={setValue1} />
            <Counter value={value2} setValue={setValue2} />
            <Counter value={value3} setValue={setValue3} />
            <button onClick={(e) => {handleClick(1)}}>++</button>
            <button onClick={(e) => {handleClick(-1)}}>--</button>
        </div>
    );
}

export default App;
