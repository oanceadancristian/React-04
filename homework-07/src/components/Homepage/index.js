import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as RouterLink,
  NavLink,
  useLocation,
  useParams,
} from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
import { setRandomCharacterList } from '../slices/RickAndMortyAppSlice';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Homepage.css';

const Homepage = () => {
  const rickAndMortyApp = useSelector((state) => state.rickAndMortyApp);
  const { randomCharacterList } = rickAndMortyApp;
  const dispatch = useDispatch();

  const generateRandomCharacterList = () => {
    let sixCharacterList = [];
    let characterCount = 826;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * characterCount) + 1;
      if (sixCharacterList.indexOf(randomNumber) === -1) {
        sixCharacterList.push(randomNumber);
      }
    }

    const endPoint = sixCharacterList.join(',');
    return endPoint;
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${generateRandomCharacterList()}`
      )
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLoading(false);
          dispatch(setRandomCharacterList(data));
        }
      });
  }, []);

  useEffect(() => {
    localStorage.removeItem('Status');
    localStorage.removeItem('Species');
    localStorage.removeItem('Gender');
  }, []);

  const params = useParams();
  const { pageId, episodeId, locationId } = params;

  const location = useLocation();
  const { search } = location;

  return (
    <Box>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: '50vh',
          backgroundColor: '#efefef',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '7.5vw',
            fontWeight: 'bold',
            fontFamily: 'monospace',
          }}
        >
          The Rick and Morty API
        </Typography>
      </Stack>
      <Box
        sx={{
          py: 10,
          backgroundColor: '#202329',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          sx={{
            gap: { xs: 10, md: 5 },
            flexWrap: 'wrap',
            mx: 3,
          }}
        >
          {randomCharacterList.map((randomCharacter) => {
            const showCharacterStatus = () => {
              let className = '';
              if (randomCharacter.status === 'Alive') {
                className = 'random-green';
              } else if (randomCharacter.status === 'Dead') {
                className = 'random-red';
              } else {
                className = 'random-gray';
              }
              return className;
            };

            const showCharacterGender = () => {
              return (
                randomCharacter.gender.charAt(0).toUpperCase() +
                randomCharacter.gender.slice(1)
              );
            };

            const showCharacterSpecies = () => {
              return (
                randomCharacter.species.charAt(0).toUpperCase() +
                randomCharacter.species.slice(1)
              );
            };

            const showCharacterLocation = () => {
              return (
                randomCharacter.location.name.charAt(0).toUpperCase() +
                randomCharacter.location.name.slice(1)
              );
            };

            const showCharacterOrigin = () => {
              return (
                randomCharacter.origin.name.charAt(0).toUpperCase() +
                randomCharacter.origin.name.slice(1)
              );
            };

            const showCharacterHoverColor = () => {
              if (showCharacterStatus() === 'random-green') {
                return '0 0 25px darkgreen';
              } else if (showCharacterStatus() === 'random-red') {
                return '0 0 25px darkred';
              } else {
                return '0 0 25px darkgray';
              }
            };

            return (
              <Link
                key={randomCharacter.id}
                component={RouterLink}
                to={`/characters/${randomCharacter.id}`}
                sx={{
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    width: { xs: '250px', md: '600px' },
                    height: { xs: '535px', md: '250px' },
                    borderRadius: 2,
                    backgroundColor: '#3c3e44',
                    boxShadow: '0 0 10px black',
                    color: 'white',
                    '&:hover': {
                      boxShadow: showCharacterHoverColor(),
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '250px',
                    }}
                  >
                    <img
                      src={randomCharacter.image}
                      alt={randomCharacter.name}
                      className="random-character-image"
                    />
                  </Box>
                  <Stack
                    justifyContent="center"
                    sx={{
                      mx: 'auto',
                      my: 2,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ mb: 2, fontSize: '20px' }}>
                      {randomCharacter.name}
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
                  </Stack>
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Box>
      <Stack
        direction="column"
        sx={{
          gap: 3,
          pb: 6,
          backgroundColor: '#202329',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          sx={{
            gap: 3,
          }}
        >
          <Box>
            <NavLink
              to={`/characters/pages/${
                pageId === undefined ? 1 : pageId
              }${search}`}
              className={({ isActive }) =>
                isActive ? 'footer-active' : 'footer-inactive'
              }
            >
              Characters: 826
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to={`/episodes/${episodeId === undefined ? 1 : episodeId}`}
              className={({ isActive }) =>
                isActive ? 'footer-active' : 'footer-inactive'
              }
            >
              Episodes: 51
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to={`/locations/${locationId === undefined ? 1 : locationId}`}
              className={({ isActive }) =>
                isActive ? 'footer-active' : 'footer-inactive'
              }
            >
              Locations: 126
            </NavLink>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Box>
            <Link href="https://github.com/oanceadancristian" target="_blank">
              <GitHubIcon
                fontSize="large"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#8c1aff',
                    cursor: 'pointer',
                  },
                }}
              />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Homepage;
