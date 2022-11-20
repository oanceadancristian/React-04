import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import CharacterItem from '../CharacterItem';
import { setCharacterList } from '../slices/CharacterListSlice';
import './CharacterList.css';

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const { characterList } = characters;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        dispatch(setCharacterList(results));
      }
    });
  }, []);

  return (
    <ul>
      {characterList.map((episode) => {
        const { id } = episode;
        return <CharacterItem key={id} id={id} />;
      })}
    </ul>
  );
};

export default CharacterList;
