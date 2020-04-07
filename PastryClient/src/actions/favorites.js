import {FAVORITES} from './types';
import {BACKEND} from '../../config.js';

export const saveWishList = ({userId, productId}) => (dispatch) => {
    dispatch({type: FAVORITES.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/save-fav`,{
        method: 'POST',
        body: JSON.stringify({userId, productId}), //Backend accepts in json format 
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'  //Store session string in the browser
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: FAVORITES.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: FAVORITES.FETCH_SUCCESS,
                favorite: json
            });
        }
    })
    .catch(error => dispatch({
        type: FAVORITES.FETCH_ERROR,
        message: error.message
    })) 
}

export const removeWishList = ({userId, productId}) => (dispatch) => {
    dispatch({type: FAVORITES.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/remove-fav`,{
        method: 'POST',
        body: JSON.stringify({userId, productId}), //Backend accepts in json format 
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'  //Store session string in the browser
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: FAVORITES.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: FAVORITES.FETCH_SUCCESS,
                favorite: json
            });
        }
    })
    .catch(error => dispatch({
        type: FAVORITES.FETCH_ERROR,
        message: error.message
    })) 
}


export const getWishList = ({userId}) => (dispatch) => {
    dispatch({type: FAVORITES.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/user-fav/${userId}`,{
        credentials: 'include'  //Store session string in the browser
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: FAVORITES.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: FAVORITES.FETCH_FAV_SUCCESS,
                product: json
            });
        }
    })
    .catch(error => dispatch({
        type: FAVORITES.FETCH_ERROR,
        message: error.message
    })) 
}