import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setRandomCharacterList } from '../slices/RickAndMortyAppSlice';
import Navbar from '../Navbar';
import './RickAndMortyApp.css';

const RickAndMortyApp = () => {
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

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${generateRandomCharacterList()}`
      )
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setRandomCharacterList(data));
        }
      });
  }, []);

  return (
    <>
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
                      to={`/characters/${randomCharacter.id}`}
                      className="random-character-link"
                    >
                      {randomCharacter.name}
                    </Link>
                  </div>
                  <div className="random-character-species">
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
    </>
  );
};

export default RickAndMortyApp;
