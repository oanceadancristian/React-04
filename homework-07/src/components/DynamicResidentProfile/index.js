import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setCharacterImg,
  setCharacterName,
  setCharacterStatus,
  setCharacterSpecies,
  setCharacterGender,
  setCharacterOrigin,
  setCharacterOriginId,
  setCharacterLocation,
  setCharacterLocationId,
} from '../slices/DynamicResidentProfileSlice';
import './DynamicResidentProfile.css';

const DynamicResidentProfile = (props) => {
  const { locationResidentParam } = props;

  const params = useParams();
  const { locationId } = params;

  let residentId = locationResidentParam;

  const dynamicResidentProfile = useSelector(
    (state) => state.dynamicResidentProfile
  );
  const {
    characterImg,
    characterName,
    characterStatus,
    characterSpecies,
    characterGender,
    characterOrigin,
    characterOriginId,
    characterLocation,
    characterLocationId,
  } = dynamicResidentProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${locationResidentParam}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCharacterImg(response.data.image));
          dispatch(setCharacterName(response.data.name));
          dispatch(setCharacterStatus(response.data.status));
          dispatch(setCharacterSpecies(response.data.species));
          dispatch(setCharacterGender(response.data.gender));
          dispatch(setCharacterOrigin(response.data.origin.name));
          dispatch(
            setCharacterOriginId(
              response.data.origin.url.substring(
                response.data.origin.url.lastIndexOf('/') + 1
              )
            )
          );
          dispatch(setCharacterLocation(response.data.location.name));
          dispatch(
            setCharacterLocationId(
              response.data.location.url.substring(
                response.data.location.url.lastIndexOf('/') + 1
              )
            )
          );
        }
      });
  }, [locationResidentParam]);

  const showCharacterStatus = () => {
    let className = '';
    if (characterStatus === 'Alive') {
      return (className = 'dynamic-green');
    } else if (characterStatus === 'Dead') {
      return (className = 'dynamic-red');
    } else {
      return (className = 'dynamic-dark-gray');
    }
  };

  const showCharacterGender = () => {
    return characterGender.charAt(0).toUpperCase() + characterGender.slice(1);
  };

  const showCharacterSpecies = () => {
    return characterSpecies.charAt(0).toUpperCase() + characterSpecies.slice(1);
  };

  const showCharacterLocation = () => {
    return (
      characterLocation.charAt(0).toUpperCase() + characterLocation.slice(1)
    );
  };

  const showCharacterOrigin = () => {
    return characterOrigin.charAt(0).toUpperCase() + characterOrigin.slice(1);
  };

  return (
    <div className="dynamic-resident-details">
      <img
        src={characterImg}
        alt={characterName}
        className="dynamic-resident-image"
      />
      <div className="dynamic-resident-info">
        <div className="dynamic-resident-name">
          <Link
            to={`/locations/${locationId}/residents/${residentId}`}
            className="dynamic-resident-link"
          >
            {characterName}
          </Link>
        </div>
        <div className="dynamic-resident-species">
          <div className={showCharacterStatus()}></div>
          {showCharacterGender()} - {showCharacterSpecies()}
        </div>
        <div className="dynamic-resident-location">
          <span className="dynamic-last-known-location">
            Last known location:
          </span>
          <div>
            <Link
              to={`/locations/${characterLocationId}`}
              className="dynamic-resident-link"
            >
              {showCharacterLocation()}
            </Link>
          </div>
        </div>
        <div className="dynamic-resident-origin">
          <span className="dynamic-first-seen-in">First seen in:</span>
          <div>
            <Link
              to={`/locations/${characterOriginId}`}
              className="dynamic-resident-link"
            >
              {showCharacterOrigin()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicResidentProfile;
