import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterImage.css';

const CharacterImage = (props) => {
  const { param } = props;

  const [characterImg, setCharacterImg] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterSpecies, setCharacterSpecies] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [characterOrigin, setCharacterOrigin] = useState('');
  const [characterLocation, setCharacterLocation] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${param}`)
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
  }, [param]);

  const showCharacterStatus = () => {
    let className = '';
    if (characterStatus === 'Alive') {
      return (className = 'green');
    } else if (characterStatus === 'Dead') {
      return (className = 'red');
    } else {
      return (className = 'dark-gray');
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
    <div className="character-details">
      <img src={characterImg} alt={characterName} />
      <div className="character-info">
        <div className="character-name">{characterName}</div>
        <div className="character-species">
          <div className={showCharacterStatus()}></div>
          {showCharacterGender()} - {showCharacterSpecies()}
        </div>
        <div className="character-location">
          <span className="last-known-location">Last known location:</span>
          <div>{showCharacterLocation()}</div>
        </div>
        <div className="character-origin">
          <span className="first-seen-in">First seen in:</span>
          <div>{showCharacterOrigin()}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterImage;
