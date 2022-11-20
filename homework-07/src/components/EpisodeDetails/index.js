import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setEpisodeDetailsAirDate,
  setEpisodeDetailsEpisode,
  setEpisodeDetailsId,
  setEpisodeDetailsName,
} from '../slices/EpisodeDetailsSlice';
import './EpisodeDetails.css';

const EpisodeDetails = () => {
  const params = useParams();
  const { episodeId } = params;

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/episodes');
  };

  const episodeDetails = useSelector((state) => state.episodeDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setEpisodeDetailsAirDate(data['air_date']));
          dispatch(setEpisodeDetailsEpisode(data.episode));
          dispatch(setEpisodeDetailsId(data.id));
          dispatch(setEpisodeDetailsName(data.name));
        }
      });
  }, []);

  return (
    <div className="episode-details">
      <div className="episode-id">Episode: {episodeDetails?.id}</div>
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
      <button className="go-back-btn" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default EpisodeDetails;
