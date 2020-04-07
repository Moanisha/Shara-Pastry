import {combineReducers} from 'redux';
import productReducer from './products';
import userReducer from './users';
import favoriteReducer from './favorites';
import {ACCOUNT} from '../actions/types';

const appReducer = combineReducers({
    productReducer, userReducer, favoriteReducer
})
  
const rootReducer = (state, action) => {
    if (action.type === ACCOUNT.FETCH_LOGOUT_SUCCESS) {
        state = undefined
    }

    return appReducer(state, action)
}
export default rootReducer;


// export default combineReducers({productReducer, userReducer, favoriteReducer})