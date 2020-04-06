import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './src/components/home';
import App from './src/components/app';
import NavBar from './src/components/navBar';
import Wishlist from './src/components/wishlist';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AuthRoute = (props) => {
    if(!store.getState().userReducer.user.isLoggedIn){
        return <Redirect to={{pathname : '/'}}/>
    }
    const {component, path} = props;
    return <Route path={path} component={component}/>                             
}

ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <div id="page-wrapper">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={App} />
                <AuthRoute path="/home" component={Home}/>
                <AuthRoute path="/wishlist" component={Wishlist}/>
            </Switch>
            </div>
        </HashRouter>
    </Provider>
, document.getElementById('app'));