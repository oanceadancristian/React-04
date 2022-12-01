import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectLocation from '../Select/SelectLocation';
import CharacterItem from '../CharacterItem';
import { setLocationDetails } from '../slices/LocationDetailsSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LocationList = () => {
  const locations = useSelector((state) => state.locations);
  const { locationDetails } = locations;
  const { dimension, name, type } = locationDetails;
  const dispatch = useDispatch();

  const params = useParams();

  const [locationId, setLocationId] = useState(
    params.locationId === undefined ? 1 : params.locationId
  );
  const [characterList, setCharacterList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [locationFound, setLocationFound] = useState(true);

  const [characterPageError, setCharacterPageError] = useState('');

  useEffect(() => {
    if (locationId > 126) {
      setLoading(false);
      setLocationFound(false);
      setCharacterPageError('Location not found!');
    }
  }, [locationId]);

  useEffect(() => {
    const getLocationCharacters = async () => {
      const locationData = await fetch(
        `https://rickandmortyapi.com/api/location/${locationId}`
      ).then((response) => response.json());

      dispatch(setLocationDetails(locationData));

      const locationCharacterIdList = [];
      locationData.residents.forEach((resident) => {
        let locationCharacterId = resident.substring(
          resident.lastIndexOf('/') + 1
        );
        locationCharacterIdList.push(locationCharacterId);
      });
      const endpoint = locationCharacterIdList.toString();

      fetch(`https://rickandmortyapi.com/api/character/${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setCharacterList(data);
        });
    };

    getLocationCharacters();
  }, [locationId, dispatch]);

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
      {locationFound ? (
        <>
          <Box sx={{ m: 6 }}>
            <Typography
              variant="h3"
              sx={{ mb: 2, fontFamily: 'monospace', textAlign: 'center' }}
            >
              Location name:{' '}
              <Typography
                variant="h3"
                component="span"
                sx={{
                  display: { xs: 'block', md: 'inline-block' },
                  fontFamily: 'monospace',
                  color: '#7300e6',
                }}
              >
                {name === '' || name === 'unknown' ? 'Unknown' : name}
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontFamily: 'monospace', textAlign: 'center' }}
            >
              Dimension:{' '}
              <Typography
                variant="h5"
                component="span"
                sx={{
                  display: { xs: 'block', md: 'inline-block' },
                  fontFamily: 'monospace',
                }}
              >
                {dimension === '' || dimension === 'unknown'
                  ? 'Unknown'
                  : dimension}
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: 'monospace', textAlign: 'center' }}
            >
              Type:
              <Typography
                variant="h5"
                component="span"
                sx={{
                  display: { xs: 'block', md: 'inline-block' },
                  fontFamily: 'monospace',
                }}
              >
                {type === '' || type === 'unknown' ? 'Unknown' : type}
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
              <SelectLocation
                total={126}
                locationId={locationId}
                setLocationId={setLocationId}
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

export default LocationList;
