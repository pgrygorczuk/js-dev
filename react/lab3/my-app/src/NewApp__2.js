import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = React.useState( '' );

    function handleChange(e)
    {
        setUsername( e.target.value );
        console.log( username );
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        onSubmitUsername( username );
    }
    
  return (
    //   e => onSubmitUsername(e)
    <form onSubmit={handleSubmit}> 
      <div>
        <label>Username:</label>
        <input id="username" type="text" value={username} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
