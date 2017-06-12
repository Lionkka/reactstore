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



import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function HomePage() {
    return (
        <div className="container-fluid">
            <Header/>
            <Sidebar />
            <ContentConteiner/>
        </div>
    );
}

// нет browserHistory
//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Route path="/" component={HomePage}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
