import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';


function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default Routes;