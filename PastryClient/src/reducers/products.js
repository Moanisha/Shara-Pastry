import {PRODUCTS} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_PRODUCT = [];

const productReducer = (state = DEFAULT_PRODUCT, action) => {
    switch(action.type) {
        case PRODUCTS.FETCH:
            return {...state, status: fetchStates.fetching}
        case PRODUCTS.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error}
        case PRODUCTS.FETCH_SUCCESS:
            return {...state, products: action.products, status: fetchStates.success}
        case PRODUCTS.FETCH_ID_SUCCESS:
            return {...state, productDetails: action, status: fetchStates.success}    
        default:
            return state
    }
}

export default productReducer;