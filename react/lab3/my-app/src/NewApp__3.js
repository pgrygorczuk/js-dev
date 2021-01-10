import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = React.useState( '' );
    const [isUsernameNotEmpty, setIsUsernameNotEmpty] = React.useState( true );
    const [errorMessage, setErrorMessage] = React.useState( '' );

    //Praca domowa: blokada dalszego wpisywania po wpisaniu jednej wielskiej litery.
    //Mozliwe jest wpisanie jednej wielkiej litery, kolejnych nie. Jezeli skasujemy wielka litere, mozna dalej pisac.

    function handleChange(e)
    {
        const username = e.target.value;
        setUsername( username );
        setIsUsernameNotEmpty( username.length <= 0 );
        if( username.toLowerCase() != username )
        {
            setErrorMessage( 'Characters should be in lowercase.' );
        }
        else
        {
            setErrorMessage( '' );
        }
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
        <input
            disabled={username.toLocaleLowerCase()!=username}
            id="username" type="text" value={username} onChange={handleChange} />
      </div>
        {Boolean(errorMessage) && <p>{errorMessage}</p>}
      <button disabled={isUsernameNotEmpty} style="disabled" type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
