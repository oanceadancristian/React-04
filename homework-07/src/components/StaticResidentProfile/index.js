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
} from '../slices/StaticResidentProfileSlice';
import './StaticResidentProfile.css';

const StaticResidentProfile = () => {
  const params = useParams();
  const { locationId, residentId } = params;

  const staticResidentProfile = useSelector(
    (state) => state.staticResidentProfile
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
  } = staticResidentProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${residentId}`)
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
  }, [residentId]);

  const showCharacterStatus = () => {
    let className = '';
    if (characterStatus === 'Alive') {
      return (className = 'static-green');
    } else if (characterStatus === 'Dead') {
      return (className = 'static-red');
    } else {
      return (className = 'static-dark-gray');
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
    <div className="static-resident-details">
      <img
        src={characterImg}
        alt={characterName}
        className="static-resident-image"
      />
      <div className="static-resident-info">
        <div className="static-resident-name">
          <Link
            to={`/locations/${locationId}/residents/${residentId}`}
            className="static-resident-link"
          >
            {characterName}
          </Link>
        </div>
        <div className="static-resident-species">
          <div className={showCharacterStatus()}></div>
          {showCharacterGender()} - {showCharacterSpecies()}
        </div>
        <div className="static-resident-location">
          <span className="static-last-known-location">
            Last known location:
          </span>
          <div>
            <Link
              to={`/locations/${characterLocationId}`}
              className="static-resident-link"
            >
              {showCharacterLocation()}
            </Link>
          </div>
        </div>
        <div className="static-resident-origin">
          <span className="static-first-seen-in">First seen in:</span>
          <div>
            <Link
              to={`/locations/${characterOriginId}`}
              className="static-resident-link"
            >
              {showCharacterOrigin()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticResidentProfile;
