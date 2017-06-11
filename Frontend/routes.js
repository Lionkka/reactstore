import { IndexRoute, Route, Link } from 'react-router-dom';
import React from 'react'

import Sidebar from './components/Sidebar.jsx';
import MainContainer from './components/Content';

export default (
    <div className="container-fluid">

        <Route path="/" component={Sidebar}>
            <IndexRoute component={MainContainer} />

        </Route>
        <Route path="/about" component={MainContainer}/>
    </div>)
