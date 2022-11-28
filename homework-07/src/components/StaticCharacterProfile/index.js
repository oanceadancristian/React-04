import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './StaticCharacterProfile.css';
import { Typography } from '@mui/material';

const StaticCharacterProfile = () => {
  const params = useParams();
  const { characterId } = params;

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
      });
  }, [characterId]);

  const showCharacterStatus = () => {
    let className = '';
    if (characterStatus === 'Alive') {
      return (className = 'static-green');
    } else if (characterStatus === 'Dead') {
      return (className = 'static-red');
    } else {
      return (className = 'static-gray');
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

  const showCharacterType = () => {
    return characterType.charAt(0).toUpperCase() + characterType.slice(1) === ''
      ? 'Unknown'
      : characterType.charAt(0).toUpperCase() + characterType.slice(1);
  };

  return (
    <Box>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ backgroundColor: '#202329', height: '100vh' }}>
        <Navbar />
        <Box
          sx={{
            backgroundColor: '#f0e4d3',
            boxShadow: '0px 0px 25px black',
            borderRadius: '10px',
            margin: '0 auto',
            display: 'flex',
            width: '780px',
            height: '300px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0px 0px 25px white',
            },
          }}
        >
          <img
            src={characterImg}
            alt={characterName}
            className="static-character-image"
          />
          <Box
            sx={{
              margin: '0px auto',
              textAlign: 'center',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{ marginBottom: '10px', fontSize: '25px', color: 'black' }}
            >
              {characterName}
            </Box>
            <Box sx={{ marginBottom: '20px', color: '#606060' }}>
              <Box className={showCharacterStatus()}></Box>
              {showCharacterGender()} - {showCharacterSpecies()}
            </Box>
            <Box sx={{ marginBottom: '20px', color: '#606060' }}>
              <Typography
                component="span"
                sx={{
                  marginBottom: '5px',
                  display: 'inline-block',
                  color: 'black',
                }}
              >
                Last known location:
              </Typography>
              <Box>{showCharacterLocation()}</Box>
            </Box>
            <Box sx={{ marginBottom: '20px', color: '#606060' }}>
              <Typography
                component="span"
                sx={{
                  marginBottom: '5px',
                  display: 'inline-block',
                  color: 'black',
                }}
              >
                First seen in:
              </Typography>
              <Box>{showCharacterOrigin()}</Box>
            </Box>
            <Box sx={{ marginBottom: '20px', color: '#606060' }}>
              <Typography
                component="span"
                sx={{
                  marginBottom: '5px',
                  display: 'inline-block',
                  color: 'black',
                }}
              >
                Type:
              </Typography>
              <Box>{showCharacterType()}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StaticCharacterProfile;
