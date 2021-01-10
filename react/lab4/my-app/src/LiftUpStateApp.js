import * as React from 'react';

function BoilingVerdict(props)
{
    if( props.celsius >= 100 ){
        return <p>The water would boil.</p>;
    }else{
        return <p>The water would not boil.</p>;
    }
}

function App()
{
    const [temperature, setTemperature] = React.useState('');

    return (
        <div>
            <input
                value={temperature}
                onChange={e => setTemperature(e.target.value)} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    );
}

export default App;
