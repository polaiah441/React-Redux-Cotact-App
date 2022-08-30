import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css" 
import {BrowserRouter as Router} from 'react-router-dom'
import { legacy_createStore } from 'redux'
import ContactReducer from './Redux/reducers/ContactReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';


const store = legacy_createStore(ContactReducer, composeWithDevTools);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
     <Router>
    <App />
    </Router>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
