import * as React from 'react';

function useLocalStorageState(key, defaultValue){
  const [value, setValue] = React.useState(
    window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    console.log('render');
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

function Greeting({initialName = ''}){

  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event){
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Stefan" />
}

export default App;