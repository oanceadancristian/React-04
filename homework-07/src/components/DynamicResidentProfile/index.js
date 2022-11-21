import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './DynamicResidentProfile.css';

const DynamicResidentProfile = (props) => {
  const { locationResidentParam } = props;

  const params = useParams();
  const { locationId } = params;
  let residentId = locationResidentParam;

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
      .get(`https://rickandmortyapi.com/api/character/${locationResidentParam}`)
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
