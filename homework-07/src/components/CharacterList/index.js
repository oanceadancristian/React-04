import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Search from '../Search';
import Filters from '../Filters';
import CharacterItem from '../CharacterItem';
import Pagination from '../Pagination';
import { setCharacterList, setInfo } from '../slices/CharacterListSlice';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const { characterList, info } = characters;
  const dispatch = useDispatch();

  const params = useParams();

  const [pageNumber, setPageNumber] = useState(
    params.pageId === undefined ? 1 : params.pageId
  );
  const [search, setSearch] = useState('');

  const [status, setStatus] = useState(
    localStorage.getItem('Status') === null
      ? ''
      : localStorage.getItem('Status').slice(0, 7)
  );
  const [species, setSpecies] = useState(
    localStorage.getItem('Species') === null
      ? ''
      : localStorage.getItem('Species').slice(0, 7)
  );
  const [gender, setGender] = useState(
    localStorage.getItem('Gender') === null
      ? ''
      : localStorage.getItem('Gender').slice(0, 7)
  );

  const [loading, setLoading] = useState(true);

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
          setLoading(false);
          dispatch(setCharacterList(results));
          dispatch(setInfo(info));
        }
      });
  }, [pageNumber, search, status, gender, species]);

  return (
    <Box>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <Box
        justifyContent="center"
        sx={{
          display: { xs: 'block', md: 'flex' },
          gap: 3,
          margin: 6,
        }}
      >
        <Box
          sx={{
            width: { xs: '75%', md: '25%' },
            mx: { xs: 'auto' },
            my: { xs: 5 },
          }}
        >
          <Filters
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 250px))',
            justifyContent: 'center',
            columnGap: { xs: 12, md: 8 },
            rowGap: 6,
            width: { xs: '100%', md: '75%' },
          }}
        >
          <CharacterItem characterList={characterList} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Box>
    </Box>
  );
};

export default CharacterList;
