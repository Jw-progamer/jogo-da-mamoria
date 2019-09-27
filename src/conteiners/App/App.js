import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import CssBaseLine from "@material-ui/core/CssBaseline"

import Routers from '../Routers'

function App() {
    return (
        <>
            <CssBaseLine />
            <Router>
                <Routers></Routers>
            </Router>
        </>
    );
}

export default App;