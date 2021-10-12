import React from 'react';

function Input({ placeholder, name, onChange, value, className }) {
  return (
    <input
      className={ className }
      type="text"
      placeholder={ placeholder }
      name={ name }
      onChange={ (e) => onChange(e) }
      value={ value }
    />
  );
};

export default Input;