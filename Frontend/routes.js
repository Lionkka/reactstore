import { IndexRoute, Route, Link } from 'react-router-dom';
import React from 'react'

import Sidebar from './src/components/Sidebar.jsx';
import MainContainer from './src/components/Content';





// я пыталась сделать так, но тоже не получилось
export default (
    <div className="container-fluid">

        <Route path="/" component={Sidebar}>
            <IndexRoute component={MainContainer} />

        </Route>
        <Route path="/about" component={MainContainer}/>
    </div>)
