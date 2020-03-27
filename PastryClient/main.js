import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
, document.getElementById('app'));