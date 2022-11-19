import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DynamicResidentProfile from '../DynamicResidentProfile';
import { setLocationResidentList } from '../slices/LocationResidentListSlice';
import './LocationResidentList.css';

const CharacterList = () => {
  const params = useParams();
  const { locationId } = params;

  const locationResidents = useSelector((state) => state.locationResidents);
  const { locationResidentList } = locationResidents;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(setLocationResidentList(data.residents));
        }
      });
  }, [locationId]);

  return (
    <div className="resident-container">
      {locationResidentList?.map((locationResident, index) => {
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
