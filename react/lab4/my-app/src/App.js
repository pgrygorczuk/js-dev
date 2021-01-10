import * as React from 'react';
import './App.css';

const scaleNames = {
    c: 'Celsjuszach',
    f: 'Fahrenheitach',
};

function farenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function BoilingVerdict(props)
{
    if( props.celsius >= 100 ){
        return <p>The water would boil.</p>;
    }else{
        return <p>The water would not boil.</p>;
    }
}

function TemperatureInput(props){
    const handleChange = e =>{
        props.onTemperatureChange( e.target.value );
    };

    //const { temperature, scale } = props;
    const scale = props.scale;

    return (
        <fieldset>
            <legend>Podaj temperaturę w {scaleNames[scale]}:</legend>
            <input value={temperature}
                onChange={handleChange} />
        </fieldset>    
    );
}

function Calculator()
{
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature="fahrenheit"
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );

    // const [temperature, setTemperature] = React.useState('');

    // let handleChange = (e) => {
    //     setTemperature( e.target.value );
    // }

    // return (
    //     <fieldset>
    //         <legend>Podaj temperaturę w {scaleNames[scale]}:</legend>
    //         <input
    //         value={temperature}
    //         onChange={this.handleChange}
    //         <BoilingVerdict celsius={parseFloat(temperature)} />
    //     </fieldset>
    // );
}
