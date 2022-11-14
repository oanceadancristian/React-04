import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RickAndMortyApp.css';

const RickAndMortyApp = () => {
  const [randomCharacterList, getRandomCharacterList] = useState([]);

  function generateRandomCharacterList() {
    let randomCharacterList = [];
    let characterCount = 826;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * characterCount) + 1;
      if (randomCharacterList.indexOf(randomNumber) === -1) {
        randomCharacterList.push(randomNumber);
      }
    }

    const endPoint = randomCharacterList.join(',');

    axios
      .get(`https://rickandmortyapi.com/api/character/${endPoint}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          getRandomCharacterList(data);
        }
      });
  }

  useEffect(() => {
    generateRandomCharacterList();
  }, []);

  console.log(randomCharacterList);

  return (
    <>
      <header>
        <h1>The Rick and Morty API</h1>
      </header>
      <main>
        {randomCharacterList.map((randomCharacter) => {
          const showCharacterStatus = () => {
            let className = '';
            if (randomCharacter.status === 'Alive') {
              return (className = 'dynamic-green');
            } else if (randomCharacter.status === 'Dead') {
              return (className = 'dynamic-red');
            } else {
              return (className = 'dynamic-dark-gray');
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
            <div className="random-character-details" key={randomCharacter.id}>
              <img
                src={randomCharacter.image}
                alt={randomCharacter.name}
                className="random-character-image"
              />
              <div className="random-character-info">
                <div className="random-character-name">
                  <Link
                    to={`/episodes/${randomCharacter.id}/characters/${randomCharacter.id}`}
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
        <Link to="/episodes" className="episodes-link">
          <button className="episodes-btn">See episodes</button>
        </Link>
      </main>
    </>
  );
};

export default RickAndMortyApp;
