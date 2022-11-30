import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import {
  setCharacterImg,
  setCharacterName,
  setCharacterStatus,
  setCharacterSpecies,
  setCharacterGender,
  setCharacterOrigin,
  setCharacterLocation,
  setCharacterType,
} from '../slices/StaticCharacterProfileSlice';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './StaticCharacterProfile.css';

const StaticCharacterProfile = () => {
  const params = useParams();
  const { episodeId, locationId, characterId } = params;

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
    characterLocation,
    characterType,
  } = staticCharacterProfile;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [characterFound, setCharacterFound] = useState(true);

  const [episodeCharacterList, setEpisodeCharacterList] = useState([]);
  const [locationCharacterList, setLocationCharacterList] = useState([]);

  useEffect(() => {
    if (params.episodeId !== undefined) {
      axios
        .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
        .then((response) => {
          if (response.status === 200) {
            setEpisodeCharacterList(response.data.characters);
          }
        });
    } else if (params.locationId !== undefined) {
      axios
        .get(`https://rickandmortyapi.com/api/location/${locationId}`)
        .then((response) => {
          if (response.status === 200) {
            setLocationCharacterList(response.data.residents);
          }
        });
    }
  }, [params.episodeId, episodeId, params.locationId, locationId]);

  const episodeCharacterListId = episodeCharacterList.map(
    (episodeCharacter) => {
      return episodeCharacter.substring(episodeCharacter.lastIndexOf('/') + 1);
    }
  );

  const locationCharacterListId = locationCharacterList.map(
    (locationCharacter) => {
      return locationCharacter.substring(
        locationCharacter.lastIndexOf('/') + 1
      );
    }
  );

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          dispatch(setCharacterImg(response.data.image));
          dispatch(setCharacterName(response.data.name));
          dispatch(setCharacterStatus(response.data.status));
          dispatch(setCharacterSpecies(response.data.species));
          dispatch(setCharacterGender(response.data.gender));
          dispatch(setCharacterOrigin(response.data.origin.name));
          dispatch(setCharacterLocation(response.data.location.name));
          dispatch(setCharacterType(response.data.type));
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setLoading(false);
          setCharacterFound(false);
        }
      });
  }, [characterId]);

  const showCharacterStatus = () => {
    let className = '';
    if (characterStatus === 'Alive') {
      className = 'static-green';
    } else if (characterStatus === 'Dead') {
      className = 'static-red';
    } else {
      className = 'static-gray';
    }
    return className;
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

  const showCharacterType = () => {
    return characterType.charAt(0).toUpperCase() + characterType.slice(1) === ''
      ? 'Unknown'
      : characterType.charAt(0).toUpperCase() + characterType.slice(1);
  };

  const showCharacterHoverColor = () => {
    if (showCharacterStatus() === 'static-green') {
      return '0 0 25px darkgreen';
    } else if (showCharacterStatus() === 'static-red') {
      return '0 0 25px darkred';
    } else {
      return '0 0 25px darkgray';
    }
  };

  return (
    <Box>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          height: '100vh',
          backgroundColor: '#202329',
        }}
      >
        <Navbar />
        {(episodeCharacterListId.includes(characterId) && characterFound) ||
        (locationCharacterListId.includes(characterId) && characterFound) ||
        characterFound ? (
          <Stack
            direction="row"
            sx={{
              display: { xs: 'block', lg: 'flex' },
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
              width: { xs: '300px', lg: '860px' },
              height: { xs: '600px', lg: '330px' },
              my: { xs: 5, lg: 15 },
              borderRadius: '10px',
              backgroundColor: '#3c3e44',
              boxShadow: '0px 0px 25px black',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: showCharacterHoverColor(),
              },
            }}
          >
            <Box
              sx={{
                width: { xs: '300px', lg: '330px' },
              }}
            >
              <img
                src={characterImg}
                alt={characterName}
                className="static-character-image"
              />
            </Box>
            <Stack
              justifyContent="center"
              sx={{
                mx: 'auto',
                my: 1,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              <Box sx={{ mb: 2, fontSize: '25px', color: 'white' }}>
                {characterName}
              </Box>
              <Box sx={{ mb: 2, color: 'white' }}>
                <Box className={showCharacterStatus()}></Box>
                {showCharacterGender()} - {showCharacterSpecies()}
              </Box>
              <Box sx={{ mb: 2, color: 'white' }}>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    mb: 1,
                    color: '#9e9e9e',
                  }}
                >
                  Last known location:
                </Typography>
                <Box>{showCharacterLocation()}</Box>
              </Box>
              <Box sx={{ mb: 2, color: 'white' }}>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    mb: 1,
                    color: '#9e9e9e',
                  }}
                >
                  First seen in:
                </Typography>
                <Box>{showCharacterOrigin()}</Box>
              </Box>
              <Box sx={{ mb: 2, color: 'white' }}>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    mb: 1,
                    color: '#9e9e9e',
                  }}
                >
                  Type:
                </Typography>
                <Box>{showCharacterType()}</Box>
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textTransform: 'uppercase',
              color: 'white',
            }}
          >
            Character not found!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StaticCharacterProfile;
