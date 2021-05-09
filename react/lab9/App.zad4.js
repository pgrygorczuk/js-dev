import * as React from 'react';
import './App.css';

const CountContext = React.createContext(0);

function Counter({initialCount = 0}){
    const [count, setCount] = React.useContext(CountContext);
    const increment = () => setCount(count + 1);
    return <button onClick={increment}>+</button>;
}

function CounterDisplay(){
    const [count] = React.useContext(CountContext); // Wypakowujemy pierwszy element z kontekstu.
    return <div>{count}</div>;
}

function CounterProvider(props){
    const value = React.useState(0); // value zawiera [count, setCount].
    // Komponent Provider musi dostac value. [count, setCount] zarządzane przez useState
    // zachowaliśmy w kontekscie.
    return <CountContext.Provider value={value} {...props} />;
}

function App() {
    return (
        <div>
            {/* Renderujemy tutaj CountContext.Provider itd... */}
            <CounterProvider> 
                <CounterDisplay />
                <Counter />
            </CounterProvider>
        </div>
    );
}

export default App;
