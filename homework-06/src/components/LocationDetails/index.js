import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './LocationDetails.css';

const LocationDetails = () => {
  const params = useParams();
  const { locationId } = params;

  const [locationDetails, setLocationDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLocationDetails(data);
        }
      });
  }, []);

  return (
    <div className="location-details">
      <div className="location-id">Location: {locationDetails?.id}</div>
      <div className="location-name">
        Location name: {locationDetails?.name}
      </div>
      <div className="location-dimension">
        Location dimnesion: {locationDetails?.dimension}
      </div>
      <div className="location-type">
        Location type: {locationDetails?.type}
      </div>
      <div className="see-characters">
        <Link to={`/episodes/${locationId}/characters`}>
          <button className="see-characters-btn">See characters</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationDetails;
