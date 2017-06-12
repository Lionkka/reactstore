import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reducer from './reducers/index';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension';


import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/" component={App}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
