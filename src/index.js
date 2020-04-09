import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {reducer} from './store'
import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

// потом переделать на rootreducer
const store = createStore(reducer,compose(applyMiddleware(logger)));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
 document.getElementById('root'));


