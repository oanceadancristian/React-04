import React from 'react';
import './SelectEpisode.css';

const SelectEpisode = (props) => {
  const { total, setEpisodeId } = props;

  const handleChange = (e) => {
    setEpisodeId(e.target.value);
  };

  return (
    <div className="select-container">
      <div className="select-title">Select episode</div>
      <div className="option-container">
        <select onChange={handleChange} className="select-dropdown">
          <option value="1">Choose...</option>
          {[...Array(total).keys()].map((number, index) => {
            return (
              <option key={index} value={number + 1}>
                Episode - {number + 1}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectEpisode;
