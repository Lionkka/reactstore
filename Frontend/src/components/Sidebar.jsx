import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMenu} from '../actions/sidebar';
import {getProducts} from '../actions/products';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.props.getAllCategories(this.props.categories.currentCategory);
        console.log(props);

    }

    componentWillReceiveProps(newProps) {

    }
    setCurrentCategory(category) {
        if(this.props.categories.currentCategory === category){
            this.render();
        }
        else {
            this.props.setCurrentCat(category);
        }
    }

    render() {
        const {currentMenu, parentCategory, currentCategory} = this.props.categories;
        return (
            <aside className="col-md-2">
                {parentCategory
                    ? <Link to={parentCategory.slug} onClick={() =>this.props.setCurrentCat(parentCategory.id)}>&#8592; {parentCategory.title}</Link>
                    : <hr />  }

                <ul className="nav">
                    {currentMenu.map((item) => {

                        if (item.id === currentCategory) {
                            return <li key={item.id} className="active"><a disabled>{item.title}</a></li>
                        }
                        else{
                            return <li key={item.id}>
                                <Link to={item.slug} onClick={ () => this.setCurrentCategory(item.id)}>
                                    {item.title}</Link>

                            </li>;
                        }
                    })
                    }
                </ul>
            </aside>
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
        setCurrentCat: (category) => {
            dispatch(getProducts(category));
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category});
        }
    })
)(Sidebar);