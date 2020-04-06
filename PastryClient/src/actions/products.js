import {PRODUCTS} from './types';
import {BACKEND} from '../../config.js';

export const fetchProducts = (options = {}) => (dispatch) => {
    const searchText = options.searchText? options.searchText : ' ';
    const columnName = options.columnName? options.columnName.toLowerCase() : 'name';

    dispatch({type: PRODUCTS.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/product-list?searchName=${encodeURIComponent(searchText)}&columnToSort=${encodeURIComponent(columnName)}`,{
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

export const getProduct = ({productId}) => (dispatch) => {
    dispatch({type: PRODUCTS.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/product/${productId}`,{
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
                type: PRODUCTS.FETCH_ID_SUCCESS,
                product: json
            });
        }
    })
    .catch(error => dispatch({
        type: PRODUCTS.FETCH_ERROR,
        message: error.message
    })) 
}
