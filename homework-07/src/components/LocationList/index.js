import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectLocation from '../Select/SelectLocation';
import CharacterItem from '../CharacterItem';
import { setLocationDetails } from '../slices/LocationDetailsSlice';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
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

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://rickandmortyapi.com/api/location/${locationId}`
      ).then((response) => response.json());
      dispatch(setLocationDetails(data));

      const allLocationCharacters = await Promise.all(
        data.residents.map((resident) => {
          return fetch(resident).then((response) => response.json());
        })
      );
      setLoading(false);
      setCharacterList(allLocationCharacters);
    })();
  }, [locationId]);

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
      <Box sx={{ m: 6 }}>
        <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
          Location name:{' '}
          <Typography variant="h3" component="span" sx={{ color: '#7300e6' }}>
            {name === '' || name === 'unknown' ? 'Unknown' : name}
          </Typography>
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
          Dimension:{' '}
          {dimension === '' || dimension === 'unknown' ? 'Unknown' : dimension}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Type: {type === '' || type === 'unknown' ? 'Unknown' : type}
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          margin: 6,
          gap: 3,
        }}
      >
        <Box sx={{ width: '25%' }}>
          <SelectLocation
            total={126}
            locationId={locationId}
            setLocationId={setLocationId}
          />
        </Box>
        <Box
          sx={{
            width: '75%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 250px))',
            justifyContent: 'center',
            columnGap: 6,
            rowGap: 6,
          }}
        >
          <CharacterItem characterList={characterList} pathname={pathname} />
        </Box>
      </Stack>
    </Box>
  );
};

export default LocationList;
