import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectLocation.css';

const SelectLocation = (props) => {
  const { total, setLocationId } = props;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocationId(e.target.value);
    navigate(`/locations/${e.target.value}`);
  };

  return (
    <div className="select-container">
      <div className="select-title">Select location</div>
      <div className="option-container">
        <select onChange={handleChange} className="select-dropdown">
          <option value="1">Choose...</option>
          {[...Array(total).keys()].map((number, index) => {
            return (
              <option key={index} value={number + 1}>
                Location - {number + 1}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectLocation;
