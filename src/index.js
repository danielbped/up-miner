import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);