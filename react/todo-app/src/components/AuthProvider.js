import * as React from 'react';
import { useHistory } from 'react-router-dom';

const authContext = React.createContext();

function AuthProvider({ children }){
    
    const [isAuth, setIsAuth] = React.useState(false);
    const history = useHistory();

    function signin(){
        history.replace('/tasks');
        setIsAuth(true);
    }

    function signout(){
        history.replace('/');
        setIsAuth(false);
    }

    const value = { isAuth, signin, signout };
    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    );
}

export { AuthProvider, authContext };