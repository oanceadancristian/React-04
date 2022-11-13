import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeItem from '../EpisodeItem';
import './EpisodeList.css';

const EpisodeList = () => {
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        setEpisodeList(results);
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
