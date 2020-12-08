import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(e.target.elements[1].value);
        onSubmitUsername(
            e.target.elements.username.value + ' ' + e.target.elements.username2.value
        );
    }

  return (
    //   e => onSubmitUsername(e)
    <form onSubmit={handleSubmit}> 
      <div>
        <label>Username:</label>
        <input id="username" type="text" value="123" />
      </div>
      <div>
        <label>Username2:</label>
        <input id="username2" type="text" value="abc" />
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
