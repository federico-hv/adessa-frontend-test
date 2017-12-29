import { combineReducers } from 'redux';
import productList from './productList';
import shoppingCart from './shoppingCart';

const mainReducer = combineReducers({
   productList
});

export default mainReducer;