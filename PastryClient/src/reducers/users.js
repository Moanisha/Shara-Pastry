import {ACCOUNT} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_ACCOUNT = {user : {isLoggedIn: false}}

const userReducer = (state = DEFAULT_ACCOUNT, action) => {
    switch(action.type) {
        case ACCOUNT.FETCH:
            return {...state, status: fetchStates.fetching};
        case ACCOUNT.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error}
        case ACCOUNT.FETCH_SUCCESS:
            return {...state, user: action, status: fetchStates.success}
        case ACCOUNT.FETCH_LOGOUT_SUCCESS:
            return {...state, user: action, status:fetchStates.success, loggedIn: false}
        default:
            return state
    }
}

export default userReducer;