import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
//react uses createRoot() and its method render to render html to webpage
// this is where react component should be displayed
root.render(
  // <React.StrictMode>  
    <App/>
  // </React.StrictMode>

  //components should start with upper case
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
