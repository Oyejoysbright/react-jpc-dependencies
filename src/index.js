import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './dependencies/styles/hanspet.css';
import './dependencies/styles/jpc.css';
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-phone-input-2/lib/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
