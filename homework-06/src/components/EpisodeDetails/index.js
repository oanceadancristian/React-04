import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './EpisodeDetails.css';

const EpisodeDetails = () => {
  const params = useParams();
  const { episodeId } = params;

  const [episodeDetails, setEpisodeDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setEpisodeDetails(data);
        }
      });
  }, []);

  return (
    <div className="episode-details">
      <div className="episode-id">Episode ID: {episodeDetails?.id}</div>
      <div className="episode-name">Episode name: {episodeDetails?.name}</div>
      <div className="episode-number">
        Episode number: {episodeDetails?.episode}
      </div>
      <div className="episode-date">
        Episode date: {episodeDetails?.air_date}
      </div>
      <div className="see-characters">
        <Link to={`/episodes/${episodeId}/characters`}>
          <button className="see-characters-btn">See characters</button>
        </Link>
      </div>
    </div>
  );
};

export default EpisodeDetails;
