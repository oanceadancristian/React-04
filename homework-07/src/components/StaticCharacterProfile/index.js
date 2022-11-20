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
} from '../slices/StaticCharacterProfileSlice';
import './StaticCharacterProfile.css';

const StaticCharacterProfile = () => {
  const params = useParams();
  const { episodeId, characterId } = params;

  const staticCharacterProfile = useSelector(
    (state) => state.staticCharacterProfile
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
  } = staticCharacterProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
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
  }, [characterId]);

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
    <div className="static-character-details">
      <img
        src={characterImg}
        alt={characterName}
        className="static-character-image"
      />
      <div className="static-character-info">
        <div className="static-character-name">
          <Link
            to={`/episodes/${episodeId}/characters/${characterId}`}
            className="dynamic-character-link"
          >
            {characterName}
          </Link>
        </div>
        <div className="static-character-species">
          <div className={showCharacterStatus()}></div>
          {showCharacterGender()} - {showCharacterSpecies()}
        </div>
        <div className="static-character-location">
          <span className="static-last-known-location">
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
        <div className="static-character-origin">
          <span className="static-first-seen-in">First seen in:</span>
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

export default StaticCharacterProfile;
