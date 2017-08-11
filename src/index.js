import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

//Main component that is rendered to '#root' element in index.html
//it's renderign the whole component where BrowserRouter is used

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
