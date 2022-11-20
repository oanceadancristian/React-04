import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DynamicCharacterProfile from '../DynamicCharacterProfile';
import { setCharacterList } from '../slices/CharacterListSlice';
import './EpisodeCharacterList.css';

const EpisodeCharacterList = () => {
  const params = useParams();
  const { episodeId } = params;

  const episodeCharacters = useSelector((state) => state.episodeCharacters);
  const { characterList } = episodeCharacters;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setCharacterList(data.characters));
        }
      });
  }, [episodeId]);

  return (
    <div className="character-container">
      {characterList.map((character, index) => {
        let characterParam = character.substring(
          character.lastIndexOf('/') + 1
        );
        return (
          <DynamicCharacterProfile
            key={index}
            characterParam={characterParam}
          ></DynamicCharacterProfile>
        );
      })}
    </div>
  );
};

export default EpisodeCharacterList;
