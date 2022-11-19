import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './StaticResidentProfile.css';

const StaticResidentProfile = () => {
  const params = useParams();
  const { locationId, residentId } = params;

  const [characterImg, setCharacterImg] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterSpecies, setCharacterSpecies] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');
  const [characterOriginId, setCharacterOriginId] = useState('');
  const [characterLocation, setCharacterLocation] = useState('');
  const [characterLocationId, setCharacterLocationId] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${residentId}`)
      .then((response) => {
        if (response.status === 200) {
          setCharacterImg(response.data.image);
          setCharacterName(response.data.name);
          setCharacterStatus(response.data.status);
          setCharacterSpecies(response.data.species);
          setCharacterGender(response.data.gender);
          setCharacterOrigin(response.data.origin.name);
          setCharacterOriginId(
            response.data.origin.url.substring(
              response.data.origin.url.lastIndexOf('/') + 1
            )
          );
          setCharacterLocation(response.data.location.name);
          setCharacterLocationId(
            response.data.location.url.substring(
              response.data.location.url.lastIndexOf('/') + 1
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
            to={`/locations/${locationId}/characters/${residentId}`}
            className="dynamic-character-link"
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
              className="dynamic-character-link"
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

export default StaticResidentProfile;
