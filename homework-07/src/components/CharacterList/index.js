import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
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
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(
    params.pageId === undefined ? 1 : params.pageId
  );
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');

  ////////////////////////////////////////////////////////////

  // localStorage.getItem('Status')
  // localStorage.getItem('Species')
  // localStorage.getItem('Gender')

  const [queryParams, setQueryParamas] = useSearchParams();

  useEffect(() => {
    setQueryParamas({
      ...queryParams,
      statusFilter:
        localStorage.getItem('Status') === null
          ? ''
          : localStorage.getItem('Status'),
      speciesFilter:
        localStorage.getItem('Species') === null
          ? ''
          : localStorage.getItem('Species'),
      genderFilter:
        localStorage.getItem('Gender') === null
          ? ''
          : localStorage.getItem('Gender'),
    });
  }, [queryParams, setQueryParamas]);

  ////////////////////////////////////////////////////////////

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
