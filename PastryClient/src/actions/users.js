import {ACCOUNT} from './types';
import {BACKEND} from '../../config.js';

export const login = ({username, password}) => (dispatch) => {
    dispatch({type: ACCOUNT.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/login`,{
        method: 'POST',
        body: JSON.stringify({username, password}), //Backend accepts in json format 
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'  //Store session string in the browser
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: ACCOUNT.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: ACCOUNT.FETCH_SUCCESS,
                ...json
            });
        }
    })
    .catch(error => dispatch({
        type: ACCOUNT.FETCH_ERROR,
        message: error.message
    }))  
}

export const logout = () => (dispatch) => {
    dispatch({type: ACCOUNT.FETCH})
    return fetch(`${BACKEND.ADDRESS}/api/logout`,{
        credentials: 'include'  //Store session string in the browser
    })
    .then(response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: ACCOUNT.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: ACCOUNT.FETCH_LOGOUT_SUCCESS,
                ...json
            });
        }
    })
    .catch(error => dispatch({
        type: ACCOUNT.FETCH_ERROR,
        message: error.message
    }))  
}