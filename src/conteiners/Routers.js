import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from "./Home/HomePage"

function Routers() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
        </Switch>
    );
}

export default Routers;

