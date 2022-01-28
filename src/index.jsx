import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/nomallize.scss'
import App from './App';
console.log(process.env.NODE_ENV);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);