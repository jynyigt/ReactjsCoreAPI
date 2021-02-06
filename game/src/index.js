import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./reducers/rootReducer";
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const store=createStore(
  rootReducer,
    composeWithDevTools(
        applyMiddleware(promise,thunk,logger)
    )
);
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
