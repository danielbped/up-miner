import React, { useState } from 'react';
import { Cards } from '../services/Cards';
import '../scss/Filters/filters.css';

function Filters() {
  const [filterSelected, setFilterSelected] = useState(0);
  const handleFilterClick = (id) => {
    setFilterSelected(id);
  };

  return (
    <section className="filters">
        { Cards.map(({ name, imagePath, id }) => (
          <button
            type="button"
            className={`filters__button${filterSelected === id ? "__selected" : ''}`}
            key = { id }
            onClick={ () => handleFilterClick(id) }
          >
            { imagePath }
            { name }
          </button>
        ))}
    </section>
  );
};

export default Filters;