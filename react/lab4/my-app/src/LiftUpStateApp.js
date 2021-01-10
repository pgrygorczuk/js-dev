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
    return <div>Lift up State App</div>;
}

export default App;
