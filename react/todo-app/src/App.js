import * as React from 'react';
import PublicPage from "./pages/PublicPage";
import TaskDetails from './pages/TaskDetails.js';
import { TodoApp } from './containers/TodoApp.js';
import { AuthProvider } from "./components/AuthProvider";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { authContext } from './components/AuthProvider.js';
import './App.css';


function App()
{
    function PrivateRoute({ children }){
        const { isAuth } = React.useContext(authContext);
        if(isAuth){
            return children;
        }
        return <Redirect to={{pathname: '/'}} />
    }
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>

                    <Route path="/task/:id">
                        <PrivateRoute>
                            <TaskDetails />
                        </PrivateRoute>
                    </Route>

                    <Route path="/tasks">
                        <PrivateRoute>
                            <TodoApp />
                        </PrivateRoute>
                    </Route>

                    <Route path="/">
                        <PublicPage />
                    </Route>

                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
