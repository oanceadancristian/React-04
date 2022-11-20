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
} from '../slices/DynamicCharacterProfileSlice';
import './DynamicCharacterProfile.css';

const DynamicCharacterProfile = (props) => {
  const { characterParam } = props;

  const params = useParams();
  const { episodeId } = params;

  const dynamicCharacterProfile = useSelector(
    (state) => state.dynamicCharacterProfile
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
  } = dynamicCharacterProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterParam}`)
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
  }, [characterParam]);

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
    <div className="dynamic-character-details">
      <img
        src={characterImg}
        alt={characterName}
        className="dynamic-character-image"
      />
      <div className="dynamic-character-info">
        <div className="dynamic-character-name">
          <Link
            to={`/episodes/${episodeId}/characters/${characterParam}`}
            className="dynamic-character-link"
          >
            {characterName}
          </Link>
        </div>
        <div className="dynamic-character-species">
          <div className={showCharacterStatus()}></div>
          {showCharacterGender()} - {showCharacterSpecies()}
        </div>
        <div className="dynamic-character-location">
          <span className="dynamic-last-known-location">
            Last known location:
          </span>
          <div>
            <Link
              to={`/locations/${characterLocationId}`}
              className="dynamic-character-link"
            >
              {showCharacterLocation()}
            </Link>
          </div>
        </div>
        <div className="dynamic-character-origin">
          <span className="dynamic-first-seen-in">First seen in:</span>
          <div>
            <Link
              to={`/locations/${characterOriginId}`}
              className="dynamic-character-link"
            >
              {showCharacterOrigin()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCharacterProfile;
