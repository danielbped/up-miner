import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';
import Header from './components/Header';


function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ Main } />
      <Route path="/detalhes/:id" render={ (props) => <Details {...props} /> } />
    </BrowserRouter>
  );
}

export default Routes;