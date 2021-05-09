import * as React from 'react';
import './App.css';

function reducer(state, action){
    //console.log(state, action);
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state.inputValue;
    }
}

function Counter({initialCount = 0}){
    
    const [inputValue, setInputValue] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, initialCount);

    const increment = () => dispatch({ type: 'INCREMENT', payload: +inputValue });
    const decrement = () => dispatch({ type: 'DECREMENT', payload: +inputValue });

    return (
    <React.Fragment>
        <p>{state}</p>
        <input type="number" value={inputValue}
            onChange={e => setInputValue(e.target.value)}></input>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </React.Fragment> );
}

function App() {
    return <Counter />;
}

export default App;
