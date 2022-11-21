import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Search from '../Search';
import CharacterItem from '../CharacterItem';
import Pagination from '../Pagination';
import { setCharacterList, setInfo } from '../slices/CharacterListSlice';
import './CharacterList.css';

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const { characterList, info } = characters;
  const { count, pages, prev, next } = info;
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
      )
      .then((response) => {
        const {
          status,
          data: { results, info },
        } = response;
        if (status === 200) {
          dispatch(setCharacterList(results));
          dispatch(setInfo(info));
        }
      });
  }, [pageNumber, search]);

  return (
    <>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="character-list">
        <CharacterItem characterList={characterList} />
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};

export default CharacterList;
