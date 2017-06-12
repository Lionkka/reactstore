import React from 'react';
import {connect} from 'react-redux';
import Breadcrumbs from './Breadcrumbs';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class ContentConteiner extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentWillReceiveProps(nextProps) {

        console.log('componentWillReceiveProps',
            nextProps.currentCategory,
            this.props.currentCategory,
            this.props.currentProduct

        );
    }

    render() {
        if (this.props.currentProduct) {
            return (
                <div className="col-md-9 offset-md-1">
                    <Breadcrumbs/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img src={this.props.currentProduct.imageUrl} className="img-rounded"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <p>product id:{this.props.currentProduct.id}</p>
                                <p>product category_id:{this.props.currentProduct.category_id}</p>
                                <div className="product-title">{this.props.currentProduct.title}</div>
                                <div className="product-desc">{this.props.currentProduct.description}</div>
                                <hr />
                                <div className="product-price">$ {this.props.currentProduct.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-9 offset-md-1">
                    <Breadcrumbs/>
                    <div id="products" className="row list-group">
                        {
                            this.props.products.map((item) => {
                                return (
                                    <Link
                                        to={item.slug}
                                        key={item.id}
                                        onClick={() => this.props.setCurrentProduct(item.id, item.category_id)}>
                                        <div className="item  col-xs-4 col-lg-4">
                                            <div className="thumbnail">
                                                <img className="group list-group-image" src={item.imageUrl} alt=""/>
                                                <div className="caption">
                                                    <h4 className="group inner list-group-item-heading">
                                                        {item.title}</h4>
                                                    <p className="group inner list-group-item-text">
                                                        {item.description}</p>
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-6">
                                                            <p className="lead">
                                                                ${item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }


                    </div>
                </div>
            );
        }
    }
}

export default connect(
    state => ({
        currentCategory: state.categories.currentCategory,
        currentProduct: state.products.currentProduct,
        products: state.products.products
    }),
    dispatch => ({

        setCurrentProduct: (product, category) =>{
            dispatch({type: 'SET_CURRENT_PRODUCT', payload: product});
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category})
        }

    })
)(ContentConteiner);
