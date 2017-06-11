import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentConteiner from './components/Content';
import reducer from './reducers/index';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {Route, Link, Router, BrowserRouter} from 'react-router-dom';
//import {syncHistoryWithStore} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//import routes from '../routes';


import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function HomePage(match) {
    return (
        <div className="container-fluid">
            <Header/>
            <Sidebar />
            <ContentConteiner/>
        </div>
    );
};


const Child = (match) => (
    <div>
        <h3>ID: </h3>
        <Link to='/about'>about</Link>
        {console.log(match)}
    </div>);


//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <BrowserRouter >
        <Provider store={store}>
            <div>
                {/*<Link to="/about">about</Link>*/}
                <Route exact path="/" component={Sidebar}/>
                <Route path="/about" component={ContentConteiner}/>
            </div>
            {/*<Router history={history}>
                <div>
                    <h2>Accounts</h2>
                    <Link to="/about">about</Link>
                    <Route exect path="/" component={HomePage}/>
                    <Route path="/about" component={Child}>
                        <Route path="about" component={Child}>
                            <Route path="about" component={Child}/>
                        </Route>
                    </Route>


                </div>
            </Router>*/}
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
