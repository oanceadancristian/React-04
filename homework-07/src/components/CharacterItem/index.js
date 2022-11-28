import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
          className = 'green';
        } else if (status === 'Dead') {
          className = 'red';
        } else {
          className = 'gray';
        }
        return className;
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
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              height: '600px',
              borderRadius: 3,
              backgroundColor: '#f6efe4',
              boxShadow: '0 0 25px #555;',
              color: 'black',

              '&:hover': {
                boxShadow: '0 0 25px black',
              },
            }}
          >
            <Box className={getCharacterStatusClassName()}>
              {showCharacterStatus()}
            </Box>
            <img src={image} alt={name} className="character-image" />
            <Box sx={{ m: 2, fontWeight: 'bold', textAlign: 'center' }}>
              <Box sx={{ mb: 2, fontSize: '25px' }}>{name}</Box>
              <Box sx={{ mb: 2, color: '#606060' }}>
                {showCharacterGender()} - {showCharacterSpecies()}
              </Box>
              <Box sx={{ mb: 2, color: '#606060' }}>
                <Typography
                  component="span"
                  sx={{
                    marginBottom: 1,
                    display: 'inline-block',
                    color: 'black',
                  }}
                >
                  Last known location:
                </Typography>
                <Box>{showCharacterLocation()}</Box>
              </Box>
              <Box sx={{ mb: 2, color: '#606060' }}>
                <Typography
                  component="span"
                  sx={{
                    mb: 1,
                    display: 'inline-block',
                    color: 'black',
                  }}
                >
                  First seen in:
                </Typography>
                <Box>{showCharacterOrigin()}</Box>
              </Box>
            </Box>
          </Box>
        </Link>
      );
    });
  } else {
    display = 'No characters found';
  }

  return <>{display}</>;
};

export default CharacterItem;
