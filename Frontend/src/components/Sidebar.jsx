import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProducts} from '../actions/products';

class Sidebar extends React.Component {



    setCurrentCategory(category) {
        // if(this.props.categories.currentCategory === category){
        //     this.render();
        // }
        // else {
        //     this.props.setCurrentCat(category);
        // }



    }
    getCat(array){

    }
    componentDidMount(){
        let pathArray = this.props.location.pathname.split('/').splice(1);
        console.log(pathArray);
        if(pathArray){
            let re = pathArray
                .reduce((prev, item)=>{
                    let cat = this.props.categories.allCategories.find(category=>category.slug === item );
                    console.log(prev, item, cat);
                    return cat;
                }, 0);

            console.log(re);
            //this.props.setCurrentCat(re);
        }
    }
    render() {
        const {currentMenu, parentCategory, currentCategory} = this.props.categories;
        const  pathname = this.props.location.pathname;
        return (
            <aside className="col-md-2">
                <p>{this.props.location.pathname.split('/')} </p>
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
                                <Link to={pathname !=='/'
                                ? pathname +"/"+item.slug
                                :item.slug} onClick={ () => this.setCurrentCategory(item.id)}>
                                    {item.title}</Link>
                                <Route path={pathname +"/"+item.slug }  component={Sidebar}/>

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

        setCurrentCat: (category) => {
            dispatch(getProducts(category));
            dispatch({type: 'SET_CURRENT_CATEGORY', payload: category});
        }
    })
)(Sidebar);