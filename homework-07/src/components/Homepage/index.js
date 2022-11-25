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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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
    <>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar />
      <div className="subheader">
        <h1 className="subheader-title">The Rick and Morty API</h1>
      </div>
      <div className="main-content">
        <div className="random-character-container">
          {randomCharacterList.map((randomCharacter) => {
            const showCharacterStatus = () => {
              let className = '';
              if (randomCharacter.status === 'Alive') {
                return (className = 'random-green');
              } else if (randomCharacter.status === 'Dead') {
                return (className = 'random-red');
              } else {
                return (className = 'random-gray');
              }
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
              <div
                className="random-character-details"
                key={randomCharacter.id}
              >
                <img
                  src={randomCharacter.image}
                  alt={randomCharacter.name}
                  className="random-character-image"
                />
                <div className="random-character-info">
                  <div className="random-character-name">
                    <Link
                      component={RouterLink}
                      to={`/characters/${randomCharacter.id}`}
                      className="random-character-link"
                    >
                      {randomCharacter.name}
                    </Link>
                  </div>
                  <div className="random-character-gender-and-species">
                    <div className={showCharacterStatus()}></div>
                    {showCharacterGender()} - {showCharacterSpecies()}
                  </div>
                  <div className="random-character-location">
                    <span className="random-last-known-location">
                      Last known location:
                    </span>
                    <div>{showCharacterLocation()}</div>
                  </div>
                  <div className="random-character-origin">
                    <span className="random-first-seen-in">First seen in:</span>
                    <div>{showCharacterOrigin()}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
    </>
  );
};

export default Homepage;
