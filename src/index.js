import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Route} from 'react-router-dom';
import './index.css';
import './upload-flow/upload-flow.css'
import UploadPage from './upload-flow/UploadPage'
import Register from './containers/Register'
import Login from './containers/Login'
import Home from './containers/Home';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/upload" exact component={UploadPage} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
  </BrowserRouter >,
  document.getElementById('root')
);

reportWebVitals();