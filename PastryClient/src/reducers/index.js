import {combineReducers} from 'redux';
import productReducer from './products';
import userReducer from './users';
import favoriteReducer from './favorites';

export default combineReducers({productReducer, userReducer, favoriteReducer})