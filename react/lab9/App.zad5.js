import * as React from 'react';
import './App.css';

const CountContext = React.createContext(0);

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

function Counter(){
    const [, dispatch] = React.useContext(CountContext); // Unpack second element.
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    return <React.Fragment>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </React.Fragment>;
}

function CounterDisplay(){
    const [count] = React.useContext(CountContext);
    return <div>{count}</div>;
}

function CounterProvider(props){
    const value = React.useReducer(reducer, 0);
    return <CountContext.Provider value={value} {...props} />;
}

function App() {
    return (
        <div>
            <CounterProvider> 
                <CounterDisplay />
                <Counter />
            </CounterProvider>
        </div>
    );
}

export default App;

// Praca domowa: pracujemy na aplikacja TODO.
// Zdecydowac co wyniesc do reducerow, co zostawic w useState.
// Opcjonalnie mozna zrobic context, reducery - obowiazkowo,
// ale tylko tam gdzie trzeba (gdzie to ma sens).
