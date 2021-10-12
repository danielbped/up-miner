import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [filters, setFilters] = useState({
    order: '',
    filtered: 'Todos',
  });

  return (
    <Context.Provider value={{ filters, setFilters }}>
      { children }
    </Context.Provider>
  );
};

export default Provider;