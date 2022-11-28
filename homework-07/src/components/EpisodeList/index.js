import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectEpisode from '../Select/SelectEpisode';
import CharacterItem from '../CharacterItem';
import { setEpisodeDetails } from '../slices/EpisodeDetailsSlice';
import Box from '@mui/system/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

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

  const [loading, setLoading] = useState(true);

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
      setLoading(false);
      setCharacterList(allEpisodeCharacters);
    })();
  }, [episodeId]);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    localStorage.removeItem('Status');
    localStorage.removeItem('Species');
    localStorage.removeItem('Gender');
  }, []);

  return (
    <Box>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar />
      <Box sx={{ margin: '50px' }}>
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', marginBottom: '10px' }}
        >
          Episode name:{' '}
          <Typography variant="h3" component="span" sx={{ color: '#7300e6' }}>
            {name === '' ? 'Unknown' : name}
          </Typography>
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Air date: {air_date === '' ? 'Unknown' : air_date}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          margin: '50px',
        }}
      >
        <Box sx={{ width: '25%' }}>
          <SelectEpisode
            total={51}
            episodeId={episodeId}
            setEpisodeId={setEpisodeId}
          />
        </Box>
        <Box
          sx={{
            width: '75%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 250px))',
            justifyContent: 'center',
            columnGap: '50px',
            rowGap: '50px',
          }}
        >
          <CharacterItem characterList={characterList} pathname={pathname} />
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodeList;
