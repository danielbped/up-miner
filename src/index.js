import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Header from './components/Header';
import Provider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Header />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);