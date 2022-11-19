import { configureStore } from '@reduxjs/toolkit';
import RickAndMortyAppSlice from '../slices/RickAndMortyAppSlice';
import StaticCharacterprofileSlice from '../slices/StaticCharacterProfileSlice';
import LocationResidentListSlice from '../slices/LocationResidentListSlice';
import LocationDetailsSlice from '../slices/LocationDetailsSlice';
import EpisodeListSlice from '../slices/EpisodeListSlice';
import EpisodeDetailsSlice from '../slices/EpisodeDetailsSlice';
import DynamicResidentProfileSlice from '../slices/DynamicResidentProfileSlice';
import DynamicCharacterProfileSlice from '../slices/DynamicCharacterProfileSlice';
import CharacterListSlice from '../slices/CharacterListSlice';

export default configureStore({
  reducer: {
    rickAndMortyApp: RickAndMortyAppSlice,
    staticCharacterProfile: StaticCharacterprofileSlice,
    locationResidents: LocationResidentListSlice,
    locationDetails: LocationDetailsSlice,
    episodes: EpisodeListSlice,
    episodeDetails: EpisodeDetailsSlice,
    dynamicResidentProfile: DynamicResidentProfileSlice,
    dynamicCharacterProfile: DynamicCharacterProfileSlice,
    characterList: CharacterListSlice,
  },
});
