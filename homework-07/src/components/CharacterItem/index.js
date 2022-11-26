import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import './CharacterItem.css';

const CharacterItem = (props) => {
  const { characterList, pathname } = props;

  let display;

  if (characterList.length !== 0) {
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

      const setNavigationUrl = () => {
        if (pathname === `/episodes`) {
          return `${pathname}/1/characters/${id}`;
        } else if (pathname?.includes(`/episodes/`)) {
          return `${pathname}/characters/${id}`;
        } else if (pathname === `/locations`) {
          return `${pathname}/1/characters/${id}`;
        } else if (pathname?.includes(`/locations/`)) {
          return `${pathname}/characters/${id}`;
        } else if (pathname === undefined) {
          return `/characters/${id}`;
        }
      };

      const getCharacterStatusClassName = () => {
        let className = '';
        if (status === 'Alive') {
          return (className = 'green');
        } else if (status === 'Dead') {
          return (className = 'red');
        } else {
          return (className = 'gray');
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

      const showCharacterOrigin = () => {
        return origin.name.charAt(0).toUpperCase() + origin.name.slice(1);
      };

      return (
        <Link
          key={id}
          component={RouterLink}
          to={setNavigationUrl()}
          sx={{
            backgroundColor: '#f6efe4',
            borderRadius: '10px',
            boxShadow: '0px 0px 25px #555;',
            color: 'black',
            textDecoration: 'none',
            '&:hover': {
              boxShadow: '0px 0px 25px black',
            },
          }}
        >
          <div className={getCharacterStatusClassName()}>
            {showCharacterStatus()}
          </div>
          <img src={image} alt={name} className="character-image" />
          <div className="character-info">
            <div className="character-name">{name}</div>
            <div className="character-gender-and-species">
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
        </Link>
      );
    });
  } else {
    display = 'No characters found';
  }

  return <>{display}</>;
};

export default CharacterItem;
