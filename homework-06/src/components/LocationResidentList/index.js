import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DynamicResidentProfile from '../DynamicResidentProfile';
import './LocationResidentList.css';

const CharacterList = () => {
  const params = useParams();
  const { locationId } = params;

  const [locationResidentList, setLocationResidentList] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setLocationResidentList(data);
        }
      });
  }, [locationId]);

  return (
    <div className="resident-container">
      {locationResidentList?.residents.map((locationResident, index) => {
        let locationResidentParam = locationResident.substring(
          locationResident.lastIndexOf('/') + 1
        );
        return (
          <DynamicResidentProfile
            key={index}
            locationResidentParam={locationResidentParam}
          ></DynamicResidentProfile>
        );
      })}
    </div>
  );
};

export default CharacterList;
