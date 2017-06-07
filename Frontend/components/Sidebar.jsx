import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMenu} from '../actions/sidebar';

class Sidebar extends React.Component {
    componentWillMount() {
        if (this.props.categories.allCategories.length === 0) {
            this.props.getAllCategories();
        }
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps',
            this.props.categories.parentCategory);
    }

    setCurrentCategory(category) {
        console.log('click', category);
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
                    ? <Link to={parentCategory.slug}>&#8592; {parentCategory.title}</Link>
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
        categories: state.categories,
    }),
    dispatch => ({
        getAllCategories: () =>
            dispatch(getMenu()),
        setCurrentCat: (category) => {
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category});
        }
    })
)(Sidebar);