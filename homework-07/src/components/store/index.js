import { configureStore } from '@reduxjs/toolkit';
import RickAndMortyAppSlice from '../slices/RickAndMortyAppSlice';
import CharacterListSlice from '../slices/CharacterListSlice';
import EpisodeListSlice from '../slices/EpisodeListSlice';
import LocationListSlice from '../slices/LocationListSlice';
import EpisodeDetailsSlice from '../slices/EpisodeDetailsSlice';
import LocationDetailsSlice from '../slices/LocationDetailsSlice';
import LocationResidentListSlice from '../slices/LocationResidentListSlice';
import EpisodeCharacterListSlice from '../slices/EpisodeCharacterListSlice';
import DynamicCharacterProfileSlice from '../slices/DynamicCharacterProfileSlice';
import DynamicResidentProfileSlice from '../slices/DynamicResidentProfileSlice';
import StaticCharacterProfileSlice from '../slices/StaticCharacterProfileSlice';
import StaticResidentProfileSlice from '../slices/StaticResidentProfileSlice';

export default configureStore({
  reducer: {
    rickAndMortyApp: RickAndMortyAppSlice,
    characters: CharacterListSlice,
    episodes: EpisodeListSlice,
    episodeDetails: EpisodeDetailsSlice,
    locationDetails: LocationDetailsSlice,
    locationResidents: LocationResidentListSlice,
    episodeCharacters: EpisodeCharacterListSlice,
    dynamicCharacterProfile: DynamicCharacterProfileSlice,
    dynamicResidentProfile: DynamicResidentProfileSlice,
    staticCharacterProfile: StaticCharacterProfileSlice,
    staticResidentProfile: StaticResidentProfileSlice,
    locations: LocationListSlice,
  },
});
