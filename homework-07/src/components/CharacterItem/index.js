import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';

const CharacterItem = (props) => {
  const { id } = props;

  return (
    <li>
      <Link to={`${id}`} className="character-link">
        <button className="character-btn">Character {id}</button>
      </Link>
    </li>
  );
};

export default CharacterItem;
