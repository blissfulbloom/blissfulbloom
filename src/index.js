import React from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css'; // You can add your CSS file here
import Calculator from './Calculator'; // Make sure the path is correct

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
