import React from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/products';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Breadcrumbs extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                {
                    this.props.breadcrumbs.map((item, index, arr) => {
                        if (index === arr.length - 1) {
                            return <li
                                key={item.id}
                                className='active'>
                                {item.title}
                            </li>
                        }
                        else
                            return (
                            <li
                                key={item.id}>
                                <Link
                                    to={item.slug}
                                    onClick={ () => this.props.setCurrentCat(item.id)}>
                                    {item.title}
                                </Link>
                            </li>)
                    })
                }

            </ol>
        );
    }
}

export default connect(
    state => ({
        breadcrumbs: state.categories.breadcrumbs,
    }),
    dispatch => ({
        setCurrentCat: (category) => {
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category});
            dispatch(getProducts(category));
        }
    })
)(Breadcrumbs);