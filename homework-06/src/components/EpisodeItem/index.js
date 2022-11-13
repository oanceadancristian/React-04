import React from 'react';
import { Link } from 'react-router-dom';
import './EpisodeItem.css';

const EpisodeItem = (props) => {
  const { id } = props;

  return (
    <li>
      <Link to={`${id}`} className="episode-link">
        <button className="episode-btn">Episode ID: {id}</button>
      </Link>
    </li>
  );
};

export default EpisodeItem;
