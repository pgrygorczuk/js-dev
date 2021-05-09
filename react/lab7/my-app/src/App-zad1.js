import * as React from 'react'
function Greeting({initialName = ''}){

  // const storedName = window.localStorage.getItem('name');

  // if(!storedName){
  //   window.localStorage.setItem('name', initialName);
  // }
  // else{
  //   initialName = storedName;
  // }

  const [name, setName] = React.useState(
    window.localStorage.getItem('name') || initialName
  );

  React.useEffect(() => {
    window.localStorage.setItem('name', name);
  });

  function handleChange(event){
    setName(event.target.value);
    window.localStorage.setItem('name', name);
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