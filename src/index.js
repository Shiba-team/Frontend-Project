import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Route} from 'react-router-dom';
import './index.css';
import './upload-flow/upload-flow.css'
import UploadPage from './upload-flow/UploadPage'
import Register from './containers/Register'
import Login from './containers/Login'
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/upload" exact component={UploadPage} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
  </BrowserRouter >,
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

