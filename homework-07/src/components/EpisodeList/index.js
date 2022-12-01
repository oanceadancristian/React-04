import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectEpisode from '../Select/SelectEpisode';
import CharacterItem from '../CharacterItem';
import { setEpisodeDetails } from '../slices/EpisodeDetailsSlice';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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

  const [episodeFound, setEpisodeFound] = useState(true);

  const [characterPageError, setCharacterPageError] = useState('');

  useEffect(() => {
    if (episodeId > 51) {
      setLoading(false);
      setEpisodeFound(false);
      setCharacterPageError('Episode not found!');
    }
  }, [episodeId]);

  useEffect(() => {
    const getEpisodeCharacters = async () => {
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
    };

    getEpisodeCharacters();
  }, [episodeId, dispatch]);

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
      {episodeFound ? (
        <>
          <Box sx={{ m: 6 }}>
            <Typography
              variant="h3"
              sx={{ mb: 2, fontFamily: 'monospace', textAlign: 'center' }}
            >
              Episode name:{' '}
              <Typography
                variant="h3"
                component="span"
                sx={{
                  display: { xs: 'block', md: 'inline-block' },
                  fontFamily: 'monospace',
                  color: '#7300e6',
                }}
              >
                {name === '' ? 'Unknown' : name}
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: 'monospace', textAlign: 'center' }}
            >
              Air date:{' '}
              <Typography
                variant="h5"
                component="span"
                sx={{
                  display: { xs: 'block', md: 'inline-block' },
                  fontFamily: 'monospace',
                }}
              >
                {air_date === '' ? 'Unknown' : air_date}
              </Typography>
            </Typography>
          </Box>
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
              <SelectEpisode
                total={51}
                episodeId={episodeId}
                setEpisodeId={setEpisodeId}
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 300px))',
                justifyContent: 'center',
                columnGap: { xs: 12, md: 8 },
                rowGap: 6,
                width: { xs: '100%', md: '75%' },
              }}
            >
              <CharacterItem
                characterList={characterList}
                pathname={pathname}
              />
            </Box>
          </Box>
        </>
      ) : (
        <Typography
          variant="h5"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textTransform: 'uppercase',
            color: 'black',
          }}
        >
          {characterPageError}
        </Typography>
      )}
    </Box>
  );
};

export default EpisodeList;
