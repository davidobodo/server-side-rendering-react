import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';

const App = () => {
    return (
        // <Switch>
        //     <Route path='/' render={props => (
        //         <Homepage {...props} />
        //     )} />
        // </Switch>
        <Switch>
            <Route path='/' component={HomePage} />
        </Switch>
    )
}

export default App;