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

    const handleChange = (e) => {
        setTemperature( e.target.value );
    }

    return (
        <div>
            <input
                value={temperature}
                onChange={handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    );
}

export default App;
