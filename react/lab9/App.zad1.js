import * as React from 'react';
import './App.css';

function reducer(state, action){
    console.log(state, action);
    return state + 1;
}

function Counter({initialCount = 0}){
    const [count, setCount] = React.useReducer(reducer, initialCount);
    const increment = () => setCount(count + 1);
    return <button onClick={increment}>{count}</button>;
}

function App() {
    return <Counter />;
}

export default App;
