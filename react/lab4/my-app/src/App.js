import * as React from 'react';
import './App.css';

function UserForm()
{
  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState( [] );
  //let users = [ '1', '2' ];

  function onChangeUsername(e)
  {
    setUsername( e.target.value );
  }

  function onAdd(e)
  {
    //console.log( e.target.elements.username.value );
    if( Boolean(username) )
    {
      setUsers( [...users, username] );
      setUsername( '' );
    }
  }

  return (
    <div className="App">
      <input id="username" value={username} onChange={onChangeUsername} type="text" />
      <button onClick={onAdd}>Add</button>
      {users.map( (value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
}

function App() {
  return (
    <UserForm />
  );
}

export default App;
