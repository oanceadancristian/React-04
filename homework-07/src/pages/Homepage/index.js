import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as RouterLink,
  NavLink,
  useLocation,
  useParams,
} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { setRandomCharacterList } from '../../components/slices/RickAndMortyAppSlice';
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

  const [loading, setLoading] = useState(true);

  const [characterPageError, setCharacterPageError] = useState('');

  useEffect(() => {
    const sixCharacterList = [];
    const characterCount = 826;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * characterCount) + 1;
      if (sixCharacterList.indexOf(randomNumber) === -1) {
        sixCharacterList.push(randomNumber);
      }
    }

    const endPoint = sixCharacterList.join(',');

    axios
      .get(`https://rickandmortyapi.com/api/character/${endPoint}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLoading(false);
          dispatch(setRandomCharacterList(data));
        }
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            setLoading(false);
            setCharacterPageError(error.response.data.error);
          }
        } else if (error.request) {
          setLoading(false);
          setCharacterPageError('No response received');
        } else {
          setLoading(false);
          setCharacterPageError(error.message);
        }
      });
  }, [dispatch]);

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
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Backdrop
        sx={{ color: '#7eb431', zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
          height: {
            xs: '35vh',
            sm: '35vh',
            md: '40vh',
            lg: '50vh',
            xl: '50vh',
          },
          backgroundColor: '#efefef',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mx: 3,
            fontSize: {
              xs: '50px',
              sm: '60px',
              md: '70px',
              lg: '80px',
              xl: '90px',
            },
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'monospace',
          }}
        >
          The Rick and Morty API
        </Typography>
      </Stack>
      {!characterPageError ? (
        <Box
          sx={{
            pt: 10,
            pb: 25,
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
              const showCharacterHoverColor = () => {
                if (showCharacterStatus() === 'random-green') {
                  return '0 0 25px #7eb431';
                } else if (showCharacterStatus() === 'random-red') {
                  return '0 0 25px #fa383b';
                } else {
                  return '0 0 25px #8dacbf';
                }
              };

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
      ) : (
        <Typography
          variant="h5"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'black',
          }}
        >
          {characterPageError}
        </Typography>
      )}
      <Stack
        direction="column"
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '50px',
          gap: 3,
          py: 6,
          my: 3,
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
          <Box sx={{ marginLeft: '10px', textAlign: 'center' }}>
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
          <Box sx={{ textAlign: 'center' }}>
            <NavLink
              to={`/episodes/${episodeId === undefined ? 1 : episodeId}`}
              className={({ isActive }) =>
                isActive ? 'footer-active' : 'footer-inactive'
              }
            >
              Episodes: 51
            </NavLink>
          </Box>
          <Box sx={{ marginRight: '10px', textAlign: 'center' }}>
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
                    color: '#97ce4c',
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
