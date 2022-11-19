import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DynamicCharacterProfile from '../DynamicCharacterProfile';
import {
  setCharacterListEpisodeDetailsAirDate,
  setCharacterListEpisodeDetailsCharacters,
  setCharacterListEpisodeDetailsEpisode,
  setCharacterListEpisodeDetailsId,
  setCharacterListEpisodeDetailsName,
} from '../slices/CharacterListSlice';
import './CharacterList.css';

const CharacterList = () => {
  const params = useParams();
  const { episodeId } = params;

  const characterList = useSelector((state) => state.characterList);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setCharacterListEpisodeDetailsAirDate(data['air_date']));
          dispatch(setCharacterListEpisodeDetailsCharacters(data.characters));
          dispatch(setCharacterListEpisodeDetailsEpisode(data.episode));
          dispatch(setCharacterListEpisodeDetailsId(data.id));
          dispatch(setCharacterListEpisodeDetailsName(data.name));
        }
      });
  }, [episodeId]);

  return (
    <div className="character-container">
      {characterList?.characters.map((character, index) => {
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

export default CharacterList;
