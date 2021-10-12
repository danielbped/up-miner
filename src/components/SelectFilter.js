import React, { useContext } from 'react';
import '../scss/Filters/filters.css';
import Context from '../context/Context';

function SelectFilter() {
  const { setFilters, filters } = useContext(Context);
  const options = [
    {id: 0, name:'--Selecione--', value: ''},
    {id: 1, name: 'Preço', value: 'price'},
    {id: 2, name: 'Lançamento', value: 'release'}
  ]

  const handeChangeFilter = ({ target: { value } }) => {
    setFilters({ ...filters, order: value });
  }

  return (
    <div
      className="buttons__select"
    >
      <span
        className="buttons__select__label"
      >
        Ordenar
      </span>
      <select
        onChange={ (e) => handeChangeFilter(e) }
      >
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