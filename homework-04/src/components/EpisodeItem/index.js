import React, { useState } from 'react';
import CharacterImage from '../CharacterImage';
import './EpisodeItem.css';
import Button from '@mui/material/Button';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

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
        {/* <button onClick={toggleCharacters} className="show-characters">
          {active ? 'Hide characters' : 'Show characters'}
        </button> */}
        {active ? (
          <Button
            onClick={toggleCharacters}
            sx={{
              m: 2,
              backgroundColor: '#efefef',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#f08d49',
                color: '#ffffff',
              },
            }}
            variant="contained"
            startIcon={<ToggleOnIcon />}
          >
            Hide characters
          </Button>
        ) : (
          <Button
            onClick={toggleCharacters}
            sx={{
              m: 2,
              backgroundColor: '#efefef',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#f08d49',
                color: '#ffffff',
              },
            }}
            variant="contained"
            startIcon={<ToggleOffIcon />}
          >
            Show characters
          </Button>
        )}
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
