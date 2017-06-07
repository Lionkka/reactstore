import React from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/products';

class SidebarLink extends React.Component {
    render() {
        return (
            <li role="presentation"><a href="#">{this.props.title}</a></li>
        );
    }
}

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


                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentCategory: state.currentCategory,
        products: state.products
    }),
    dispatch => ({
        getCurrentProducts:()=>
            dispatch(getProducts()),
    })

)(Sidebar);
