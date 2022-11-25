import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectLocation from '../Select/SelectLocation';
import CharacterItem from '../CharacterItem';
import { setLocationDetails } from '../slices/LocationDetailsSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './LocationList.css';

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
    <>
      <Backdrop
        sx={{ color: '#7300e6', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Navbar />
      <h1 className="subheader-location-name">
        Location name:{' '}
        <span className="location-name">
          {name === '' || name === 'unknown' ? 'Unknown' : name}
        </span>
      </h1>
      <h2 className="subheader-location-dimension">
        Dimension:{' '}
        {dimension === '' || dimension === 'unknown' ? 'Unknown' : dimension}
      </h2>
      <h3 className="subheader-location-type">
        Type: {type === '' || type === 'unknown' ? 'Unknown' : type}
      </h3>
      <div className="select-and-characters">
        <div className="select">
          <SelectLocation
            total={126}
            locationId={locationId}
            setLocationId={setLocationId}
          />
        </div>
        <div className="character-list">
          <CharacterItem characterList={characterList} pathname={pathname} />
        </div>
      </div>
    </>
  );
};

export default LocationList;
