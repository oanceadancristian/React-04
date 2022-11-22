import React from 'react';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';
import './Filters.css';

const Filters = (props) => {
  const { setStatus, setSpecies, setGender, setPageNumber } = props;

  const handleClick = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setPageNumber('');
    window.location.reload();
  };

  return (
    <div className="filters-container">
      <div className="filters-title">Filters</div>
      <div className="clear-filters">
        <span onClick={handleClick}>Clear filters</span>
      </div>
      <div className="accordition-container">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
