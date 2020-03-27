import {PRODUCTS} from './types';
import {BACKEND} from '../../config.js';

export const fetchProducts = (searchText = '') => (dispatch) => {
    dispatch({type: PRODUCTS.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/product-list?searchName=${encodeURIComponent(searchText)}`,{
        credentials: 'include'
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: PRODUCTS.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: PRODUCTS.FETCH_SUCCESS,
                products: json.products
            });
        }
    })
    .catch(error => dispatch({
        type: PRODUCTS.FETCH_ERROR,
        message: error.message
    })) 
}
