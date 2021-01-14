import * as React from 'react';

const scaleNames = {
    c: "Celsjuszach",
    f: "Fahrenheitach",
};

function farenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function BoilingVerdict(props)
{
    if( props.celsius >= 100 ){
        return <p>The water would boil.</p>;
    }else{
        return <p>The water would not boil.</p>;
    }
}

function TemperatureInput(props)
{
    const [celsius, setCelsius] = React.useState( '0' );
    
    return (
        <React.Fragment>
            <label>Podaj temperature {scaleNames[props.scale]}</label>
            <input
                value={props.value}
                onChange={e => props.setTemperature(e.target.value)} />
        </React.Fragment>
    );
}

function App()
{
    const [celsius, setCelsius] = React.useState(0);
    const [fahrenheit, setFahrenheit] = React.useState(0);

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius( farenheitToCelsius(value) );
    }

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit( celsiusToFahrenheit(value) );
    }

    return (
        <div>
            <TemperatureInput
                scale="c"
                value={celsius}
                setTemperature={handleCelsiusChange} />
            <br />
            <TemperatureInput
                scale="f"
                value={fahrenheit}
                setTemperature={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default App;
