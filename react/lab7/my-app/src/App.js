import * as React from 'react';

function useLocalStorageState(key, defaultValue){

  const [value, setValue] = React.useState( () => {
    const lsValue = window.localStorage.getItem(key);
    if(lsValue){
      return JSON.parse(lsValue);
    }
    else{
      return typeof defaultValue === 'function' ? defaultValue(): defaultValue;
    }
  });

  React.useEffect(() => {
    console.log('render');
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

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