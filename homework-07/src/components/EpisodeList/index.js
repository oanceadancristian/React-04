import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import EpisodeItem from '../EpisodeItem';
import { setEpisodeList } from '../slices/EpisodeListSlice';
import './EpisodeList.css';

const EpisodeList = () => {
  const episodes = useSelector((state) => state.episodes);
  const { episodeList } = episodes;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        dispatch(setEpisodeList(results));
      }
    });
  }, []);

  return (
    <ul>
      {episodeList.map((episode) => {
        const { id } = episode;
        return <EpisodeItem key={id} id={id} />;
      })}
    </ul>
  );
};

export default EpisodeList;
