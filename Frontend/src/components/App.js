import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMenu} from '../actions/sidebar';
import {getProducts} from '../actions/products';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import ContentConteiner from './Content';


class App extends React.Component {

    constructor(props){
        super(props);
        this.props.getAllCategories(this.props.categories.currentCategory);
        console.log('app constructor');
    }

    render() {
        return (
            <div className="container-fluid">
                <Route path="/" component={Header}/>
                <Route path="/" component={Sidebar}/>
                <Route path="/" component={ContentConteiner}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        categories: state.categories
    }),
    (dispatch) => ({
        getAllCategories: (category) => {
            dispatch(getMenu());
            dispatch(getProducts(category));
        },
    })
)(App);