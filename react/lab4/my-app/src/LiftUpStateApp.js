import * as React from 'react';

const scaleNames = {
    c: "Celsjuszach",
    f: "Fahrenheitach",
};

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

    return (
        <div>
            <TemperatureInput
                scale="c"
                value={celsius}
                setTemperature = {setCelsius} />
            <br />
            <TemperatureInput
                scale="f"
                value={celsius}
                setTemperature={setCelsius}
            />
            
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default App;
