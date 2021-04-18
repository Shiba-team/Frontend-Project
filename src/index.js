import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Route} from 'react-router-dom';
import './index.css';
import './upload-flow/upload-flow.css'
import App from './App';
import UploadPage from './upload-flow/UploadPage'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/upload" exact component={UploadPage} />
  </BrowserRouter >,
  document.getElementById('root')
);

reportWebVitals();
