import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import SelectLocation from '../Select/SelectLocation';
import CharacterItem from '../CharacterItem';
import { setLocationDetails } from '../slices/LocationDetailsSlice';
import './LocationList.css';

const LocationList = () => {
  const locations = useSelector((state) => state.locations);
  const { locationDetails } = locations;
  const { dimension, name, type } = locationDetails;
  const dispatch = useDispatch();
  const [locationId, setLocationId] = useState(1);
  const [characterList, setCharacterList] = useState([]);

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
      setCharacterList(allLocationCharacters);
    })();
  }, [locationId]);

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Navbar />
      <h1 className="subheader-location-name">
        Location name:{' '}
        <span className="location-name">{name === '' ? 'Unknown' : name}</span>
      </h1>
      <h2 className="subheader-location-dimension">
        Dimension: {dimension === '' ? 'Unknown' : dimension}
      </h2>
      <h3 className="subheader-location-type">
        Type: {type === '' ? 'Unknown' : type}
      </h3>
      <div className="select-and-characters">
        <div className="select">
          <SelectLocation total={126} setLocationId={setLocationId} />
        </div>
        <div className="character-list">
          <CharacterItem characterList={characterList} pathname={pathname} />
        </div>
      </div>
    </>
  );
};

export default LocationList;
