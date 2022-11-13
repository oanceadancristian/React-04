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
        <Link to="/episodes">
          <button className="episodes-btn">See episodes</button>
        </Link>
      </main>
    </>
  );
};

export default RickAndMortyApp;
