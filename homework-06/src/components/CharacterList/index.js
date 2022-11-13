import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DynamicCharacterProfile from '../DynamicCharacterProfile';
import './CharacterList.css';

const CharacterList = () => {
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
  }, [episodeId]);

  return (
    <div className="character-container">
      {episodeDetails?.characters.map((character, index) => {
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
