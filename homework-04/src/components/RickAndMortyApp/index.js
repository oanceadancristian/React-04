import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeList from '../EpisodeList';

const RickAndMortyApp = () => {
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
    <div>
      <EpisodeList episodeList={episodeList} />
    </div>
  );
};

export default RickAndMortyApp;
