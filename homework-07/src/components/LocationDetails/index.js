import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setLocationDetailsId,
  setLocationDetailsDimension,
  setLocationDetailsName,
  setLocationDetailsType,
} from '../slices/LocationDetailsSlice';
import './LocationDetails.css';

const LocationDetails = () => {
  const params = useParams();
  const { locationId } = params;

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/episodes');
  };

  const locationDetails = useSelector((state) => state.locationDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setLocationDetailsId(data.id));
          dispatch(setLocationDetailsDimension(data.dimension));
          dispatch(setLocationDetailsName(data.name));
          dispatch(setLocationDetailsType(data.type));
        }
      });
  }, []);

  const showEpisodeDimension = () => {
    return (
      locationDetails?.dimension.charAt(0).toUpperCase() +
      locationDetails?.dimension.slice(1)
    );
  };

  return (
    <div className="location-details">
      <div className="location-id">Location: {locationDetails?.id}</div>
      <div className="location-name">
        Location name: {locationDetails?.name}
      </div>
      <div className="location-dimension">
        Location dimnesion: {showEpisodeDimension()}
      </div>
      <div className="location-type">
        Location type: {locationDetails?.type}
      </div>
      <div className="see-characters">
        <Link to={`/locations/${locationId}/residents`}>
          <button className="see-characters-btn">See characters</button>
        </Link>
      </div>
      <button className="go-back-btn" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default LocationDetails;
