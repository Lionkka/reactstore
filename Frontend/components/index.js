import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import reducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const url = 'http://localhost:3000';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//const history = syncHistoryWithStore(HashRouter, store);
let un = store.subscribe(() => {
    //console.log(store.getState());
});


class ContentConteiner extends React.Component {
    render() {
        return (
            <div className="col-md-9 offset-md-1">
                <Breadcrumbs/>
                <div id="products" className="row list-group">
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat.</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">
                                            $21.000</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to
                                            cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Sidebar/>
                <ContentConteiner/>
            </div>
        );
    }
}

class Breadcrumbs extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
            </ol>

        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={HashRouter}>
            <div>
                <Route path="/" component={HomePage}/>
                <Route path="/about" component={HomePage}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
