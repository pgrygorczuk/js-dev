import * as React from 'react';

//Shift + Alt + F - for fix indentation

function UsernameForm()
{
	const [username, setUsername] = React.useState( '' );
	const [errorMessage, setErrorMessage] = React.useState( false );

	function onChange(e)
	{
		console.log( username );
		if( e.target.value.toLowerCase() != e.target.value )
		{
			if( !Boolean(errorMessage) )
			{
				setUsername( e.target.value );
				setErrorMessage( "Characters should be in lowercase." );
			}
		}
		else
		{
			setErrorMessage( false );
			setUsername( e.target.value );
		}
	}

	return (
		<div>
			<input id="username" type="text" value={username} onChange={onChange}/>
			{ Boolean(errorMessage) && <p>{errorMessage}</p> }
		</div> );
}

function App()
{
	return <UsernameForm />;
}

export default App;
