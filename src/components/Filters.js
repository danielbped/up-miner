import React from 'react';
import FilterButtons from './FilterButtons';
import SelectFilter from './SelectFilter';
import '../scss/Filters/filters.css';

function Filters() {
  return (
    <div className="filters">
      <FilterButtons />
      <SelectFilter />
    </div>
  );
};

export default Filters;