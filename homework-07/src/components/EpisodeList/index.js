import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectEpisode from '../Select/SelectEpisode';
import CharacterItem from '../CharacterItem';
import { setEpisodeDetails } from '../slices/EpisodeDetailsSlice';
import './EpisodeList.css';

const EpisodeList = () => {
  const episodes = useSelector((state) => state.episodes);
  const { episodeDetails } = episodes;
  const { air_date, name } = episodeDetails;
  const dispatch = useDispatch();
  const params = useParams();
  const [episodeId, setEpisodeId] = useState(
    params.episodeId === undefined ? 1 : params.episodeId
  );
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeId}`
      ).then((response) => response.json());
      dispatch(setEpisodeDetails(data));

      const allEpisodeCharacters = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((response) => response.json());
        })
      );
      setCharacterList(allEpisodeCharacters);
    })();
  }, [episodeId]);

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Navbar />
      <h1 className="subheader-episode-name">
        Episode name:{' '}
        <span className="episode-name">{name === '' ? 'Unknown' : name}</span>
      </h1>
      <h2 className="subheader-episode-air-date">
        Air date: {air_date === '' ? 'Unknown' : air_date}
      </h2>
      <div className="select-and-characters">
        <div className="select">
          <SelectEpisode
            total={51}
            episodeId={episodeId}
            setEpisodeId={setEpisodeId}
          />
        </div>
        <div className="character-list">
          <CharacterItem characterList={characterList} pathname={pathname} />
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
