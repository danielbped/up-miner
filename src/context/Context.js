import { createContext } from 'react';

const Context = createContext({
  filters: {
    order: '',
    filtered: 'Todos',
  },
})

export default Context;