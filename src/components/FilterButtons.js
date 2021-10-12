import React, { useState, useContext }  from 'react';
import { FilterOptions } from '../services/FilterOptions';
import '../scss/Filters/filters.css';
import Context from '../context/Context';

function FilterButtons() {
  const [filterSelected, setFilterSelected] = useState(0);
  const { filters, setFilters } = useContext(Context);
  const handleFilterClick = (id, name) => {
    setFilterSelected(id);
    setFilters({ ...filters, filtered: name });
  };

  return (
    <section className="buttons">
        { FilterOptions.map(({ name, imagePath, id }) => (
          <button
            type="button"
            className={`buttons__button${filterSelected === id ? "__selected" : ''}`}
            key = { id }
            onClick={ () => handleFilterClick(id, name) }
          >
            { imagePath }
            { name }
          </button>
        ))}
    </section>
  );
};

export default FilterButtons;