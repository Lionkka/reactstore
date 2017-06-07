import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMenu} from '../actions/sidebar';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        if (this.props.categories.allCategories.length === 0) {
            this.props.getAllCategories();
            this.props.setCurrentMenu(this.props.categories.currentCategory);
        }
    }
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps');
    }

    setCurrentCategory(category) {

        console.log('click');
        this.props.setParentCat(this.props.categories.currentCategory);
        console.log('setParentCat', this.props.categories.parentCategory);
        this.props.setCurrentMenu(this.props.categories.currentCategory);
        this.props.setCurrentCat(category);


    }

    render() {
        const {currentMenu, parentCategory} = this.props.categories;
        return (
            <aside className="col-md-2">
                {parentCategory
                    ? <Link to={parentCategory.slug}>&#8592; {parentCategory.title}</Link>
                    : <hr />  }

                <ul className="nav">
                    {currentMenu.map((item) => {
                        return <li key={item.id}>
                            <Link to={item.slug} onClick={ () => this.setCurrentCategory(item.id)}>
                                {item.title}</Link>

                        </li>;
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
        setCurrentMenu: (category) => {
            dispatch({type: 'SET_CURRENT_MENU', payload: category});
        },
        setCurrentCat: (category) => {
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category});
        },
        setParentCat: (category) => {
            console.log('disp');
            dispatch({type: 'SET_PARENT_CATEGORY', payload: category});
        }
    })
)(Sidebar);