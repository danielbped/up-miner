import React from 'react';
import '../scss/Filters/filters.css';

function SelectFilter() {  
  const options = [
    {id: 0, name: 'Preço', value: 'price'},
    {id: 1, name: 'Lançamento', value: 'release'}
  ]

  return (
    <div className="filters__select">
      <span className="filters__select__label">Ordenar</span>
      <select>
        { options.map(({ id, name, value }) => (
          <option
            key={ id }
            value={ value }
          >
            { name }
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;