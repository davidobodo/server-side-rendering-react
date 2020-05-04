import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';

const App = () => {
    return (
        <Switch>
            <Route path='/' render={props => (
                <Homepage {...props} />
            )} />
        </Switch>
    )
}

export default App;