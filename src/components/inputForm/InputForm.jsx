import React from 'react';

function inputForm({ onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          min="1"
          max="9999"
          onChange={(number) => onChange(number.target.value)}>
        </input>
        <button>Generate Number</button>
      </form>
    </div>
  );
}

export default inputForm;
