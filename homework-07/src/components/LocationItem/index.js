import React from 'react';
import { Link } from 'react-router-dom';
import './LocationItem.css';

const LocationItem = (props) => {
  const { id } = props;

  return (
    <li>
      <Link to={`${id}`} className="location-link">
        <button className="location-btn">Location {id}</button>
      </Link>
    </li>
  );
};

export default LocationItem;
