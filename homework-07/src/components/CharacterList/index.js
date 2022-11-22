import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../Navbar';
import Search from '../Search';
import Filters from '../Filters';
import CharacterItem from '../CharacterItem';
import Pagination from '../Pagination';
import { setCharacterList, setInfo } from '../slices/CharacterListSlice';
import './CharacterList.css';

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const { characterList, info } = characters;
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
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
  }, [pageNumber, search, status, gender, species]);

  return (
    <>
      <Navbar />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="filters-and-characters">
        <div className="filters">
          <Filters
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />
        </div>
        <div className="character-list">
          <CharacterItem characterList={characterList} />
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
};

export default CharacterList;
