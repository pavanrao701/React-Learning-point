import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css'
//import {BrowserRouter} from 'react-router-dom';
//import ReviewQuote from './components/ReviewQuote'


ReactDOM.render(
      <BrowserRouter>
        <App/>
        </BrowserRouter>,
    document.getElementById('root')
);
