import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';
import Header from './components/Header';
import Form from './pages/Form';


function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/detalhes/:id" render={ (props) => <Details {...props} /> } />
      <Route path="/contato" component={ Form } />
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default Routes;