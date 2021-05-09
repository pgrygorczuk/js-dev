import * as React from 'react';
import './App.css';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter({initialCount = 0}){
    
    const [state, dispatch] = React.useReducer(reducer, initialCount);
    const increment = () => dispatch({ type: 'INCREMENT', payload: 'example' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    return (
    <React.Fragment>
        <p>{state}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </React.Fragment> );
}

function App() {
    return <Counter />;
}

export default App;
