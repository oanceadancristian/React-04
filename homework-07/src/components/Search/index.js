import React from 'react';
import './Search.css';

const Search = (props) => {
  const { setSearch, setPageNumber } = props;

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container">
      <input
        onChange={handleChange}
        placeholder="Search for characters"
        type="text"
        className="form-search"
      />
      <button onClick={handleClick} className="form-btn">
        Search
      </button>
    </form>
  );
};

export default Search;
