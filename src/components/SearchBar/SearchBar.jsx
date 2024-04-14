import React from 'react';
import propTypes from 'prop-types';
import './Searchbar.css';

const SearchBar = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </form>
  );
};

SearchBar.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default SearchBar;
