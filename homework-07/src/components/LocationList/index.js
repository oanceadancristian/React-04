import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import LocationItem from '../LocationItem';
import { setLocationList } from '../slices/LocationListSlice';
import './LocationList.css';

const LocationList = () => {
  const locations = useSelector((state) => state.locations);
  const { locationList } = locations;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location').then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        dispatch(setLocationList(results));
      }
    });
  }, []);

  return (
    <ul>
      {locationList.map((location) => {
        const { id } = location;
        return <LocationItem key={id} id={id} />;
      })}
    </ul>
  );
};

export default LocationList;
