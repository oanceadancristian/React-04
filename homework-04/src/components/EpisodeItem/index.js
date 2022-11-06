import React, { useState } from 'react';
import CharacterImage from '../CharacterImage';
import './EpisodeItem.css';

const EpisodeItem = (props) => {
  const { id, name, episode: episodeNr, characters } = props;

  const [active, setActive] = useState(false);

  const toggleCharacters = () => {
    setActive(!active);
  };

  return (
    <li className="episode-list">
      <div className="episode-container">
        <div className="episode-id">Episode ID: {id}</div>
        <div className="episode-name">Episode name: {name}</div>
        <div className="episode-number">Episode number: {episodeNr}</div>
        <button onClick={toggleCharacters} className="show-characters">
          {active ? 'Hide characters' : 'Show characters'}
        </button>
      </div>
      <div className="character-container">
        {characters.map((character, index) => {
          let param = character.substring(character.lastIndexOf('/') + 1);
          return (
            active && (
              <CharacterImage key={index} param={param}></CharacterImage>
            )
          );
        })}
      </div>
    </li>
  );
};

export default EpisodeItem;
