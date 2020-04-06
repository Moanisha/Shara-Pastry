import {FAVORITES} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_FAVORITES = {favorite: {isFavorite: false}};

const favoriteReducer = (state = DEFAULT_FAVORITES, action) => {
    switch(action.type) {
        case FAVORITES.FETCH:
            return {...state, status: fetchStates.fetching};
        case FAVORITES.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error}
        case FAVORITES.FETCH_SUCCESS:
            return {...state, favorite: action, status: fetchStates.success}
        case FAVORITES.FETCH_FAV_SUCCESS:
            return {...state, product: action}
        // case FAVORITES.FETCH_LOGOUT_SUCCESS:
        //     return {...state, ...action.message, status:fetchStates.success, loggedIn: false}
        default:
            return state
    }
}

export default favoriteReducer;