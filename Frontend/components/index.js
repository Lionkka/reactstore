import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ContentConteiner from './Content';
import reducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//const history = syncHistoryWithStore(HashRouter, store);

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Route path="/add" component={HomePage}/>
                <Sidebar/>
                <ContentConteiner/>
            </div>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={HashRouter}>
            <div>
                <Route path="/" component={HomePage}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
