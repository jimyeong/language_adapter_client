import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import AddWordContainer from './Main/container/Details/AddWordContainer';
import ProductQuizContainer from './ProductsQuizContainer';
import { RootContainer } from './components/Containers';
ReactDOM.render(
    <React.StrictMode>
        <RootContainer>
            {/* <ProductQuizContainer /> */}
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </RootContainer>
    </React.StrictMode>,
    document.getElementById('root')
);

// <AddWordContainer />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
