import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './DynamicCharacterProfile.css';

const DynamicCharacterProfile = (props) => {
  const { characterParam } = props;

  const params = useParams();
  const { episodeId } = params;
  let characterId = episodeId;

  const [characterImg, setCharacterImg] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterSpecies, setCharacterSpecies] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');
  const [characterLocation, setCharacterLocation] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterParam}`)
      .then((response) => {
        if (response.status === 200) {
          setCharacterImg(response.data.image);
          setCharacterName(response.data.name);
          setCharacterStatus(response.data.status);
          setCharacterSpecies(response.data.species);
          setCharacterGender(response.data.gender);
          setCharacterOrigin(response.data.origin.name);
          setCharacterLocation(response.data.location.name);
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
            to={`/episodes/${episodeId}/characters/${characterId}`}
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
          <div>{showCharacterLocation()}</div>
        </div>
        <div className="dynamic-character-origin">
          <span className="dynamic-first-seen-in">First seen in:</span>
          <div>{showCharacterOrigin()}</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCharacterProfile;
