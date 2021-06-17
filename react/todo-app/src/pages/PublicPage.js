import React from 'react';
import { Button } from '../components/Button.js';
import { authContext } from '../components/AuthProvider.js';

function PublicPage(){

    const { signin } = React.useContext(authContext);

    return (
        <React.Fragment>
            <h1>Please sign in to browse this page.</h1>
            <Button iconClass="bi bi-door-open" text="Sign in" onClick={ e => { signin(); } } />
        </React.Fragment>
    );
}

export default PublicPage;
