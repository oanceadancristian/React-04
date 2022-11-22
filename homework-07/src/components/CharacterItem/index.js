import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';

const CharacterItem = (props) => {
  const { characterList } = props;

  let display;

  if (characterList) {
    display = characterList.map((character) => {
      const {
        id,
        image,
        name,
        status,
        species,
        gender,
        origin,

        location,
      } = character;

      const getCharacterStatusClassName = () => {
        let className = '';
        if (status === 'Alive') {
          return (className = 'green');
        } else if (status === 'Dead') {
          return (className = 'red');
        } else {
          return (className = 'dark-gray');
        }
      };

      const showCharacterStatus = () => {
        return status.charAt(0).toUpperCase() + status.slice(1);
      };

      const showCharacterGender = () => {
        return gender.charAt(0).toUpperCase() + gender.slice(1);
      };

      const showCharacterSpecies = () => {
        return species.charAt(0).toUpperCase() + species.slice(1);
      };

      const showCharacterLocation = () => {
        return location.name.charAt(0).toUpperCase() + location.name.slice(1);
      };

      const locationId = character.location.url.substring(
        character.location.url.lastIndexOf('/') + 1
      );

      const showCharacterOrigin = () => {
        return origin.name.charAt(0).toUpperCase() + origin.name.slice(1);
      };

      const originId = character.origin.url.substring(
        character.origin.url.lastIndexOf('/') + 1
      );

      return (
        <div className="character-details" key={id}>
          <img src={image} alt={name} className="character-image" />
          <div className={getCharacterStatusClassName()}>
            {showCharacterStatus()}
          </div>
          <div className="character-info">
            <div className="character-name">
              <Link to={`/characters/${id}`} className="character-link">
                {name}
              </Link>
            </div>
            <div className="character-species">
              {showCharacterGender()} - {showCharacterSpecies()}
            </div>
            <div className="character-location">
              <span className="last-known-location">Last known location:</span>
              <div>
                <Link
                  to={`/locations/${locationId}`}
                  className="character-link"
                >
                  {showCharacterLocation()}
                </Link>
              </div>
            </div>
            <div className="character-origin">
              <span className="first-seen-in">First seen in:</span>
              <div>
                <Link to={`/locations/${originId}`} className="character-link">
                  {showCharacterOrigin()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = 'No characters found';
  }

  return <>{display}</>;
};

export default CharacterItem;
