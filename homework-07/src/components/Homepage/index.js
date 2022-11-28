import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link as RouterLink,
  NavLink,
  useParams,
  useLocation,
} from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
import { setRandomCharacterList } from '../slices/RickAndMortyAppSlice';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
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
      <Box
        sx={{
          backgroundColor: '#efefef',
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: '0px',
            textAlign: 'center',
            color: 'black',
            fontSize: '7.5vw',
            fontWeight: 'bold',
          }}
        >
          The Rick and Morty API
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#202329',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px',
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

            return (
              <Link
                key={randomCharacter.id}
                component={RouterLink}
                to={`/characters/${randomCharacter.id}`}
                sx={{
                  backgroundColor: '#3c3e44',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px black',
                  display: 'flex',
                  width: '600px',
                  height: '250px',
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    boxShadow: '0px 0px 10px white;',
                  },
                }}
              >
                <img
                  src={randomCharacter.image}
                  alt={randomCharacter.name}
                  className="random-character-image"
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
                  <Box sx={{ marginBottom: '10px', fontSize: '20px' }}>
                    {randomCharacter.name}
                  </Box>
                  <Box sx={{ marginBottom: '20px', color: 'white' }}>
                    <Box className={showCharacterStatus()}></Box>
                    {showCharacterGender()} - {showCharacterSpecies()}
                  </Box>
                  <Box sx={{ marginBottom: '20px', color: 'white' }}>
                    <Typography
                      component="span"
                      sx={{
                        display: 'inline-block',
                        marginBottom: '5px',
                        color: '#9e9e9e',
                      }}
                    >
                      Last known location:
                    </Typography>
                    <Box>{showCharacterLocation()}</Box>
                  </Box>
                  <Box sx={{ marginBottom: '20px', color: 'white' }}>
                    <Typography
                      component="span"
                      sx={{
                        display: 'inline-block',
                        marginBottom: '5px',
                        color: '#9e9e9e',
                      }}
                    >
                      First seen in:
                    </Typography>
                    <Box>{showCharacterOrigin()}</Box>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          paddingBottom: '50px',
          backgroundColor: '#202329',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
