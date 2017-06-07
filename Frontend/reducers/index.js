import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import categories from './categories';
import products from './products';
import currentCategory from './currentCategory';
import parentCategory from './parentCategory';


export default combineReducers({
    routing: routerReducer,
    categories,
    products,
    currentCategory,
    parentCategory
})
