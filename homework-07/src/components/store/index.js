import { configureStore } from '@reduxjs/toolkit';
import RickAndMortyAppSlice from '../slices/RickAndMortyAppSlice';
import CharacterListSlice from '../slices/CharacterListSlice';
import EpisodeListSlice from '../slices/EpisodeListSlice';
import LocationListSlice from '../slices/LocationListSlice';
import EpisodeDetailsSlice from '../slices/EpisodeDetailsSlice';
import EpisodeCharacterListSlice from '../slices/EpisodeCharacterListSlice';
import StaticCharacterProfileSlice from '../slices/StaticCharacterProfileSlice';
import LocationDetailsSlice from '../slices/LocationDetailsSlice';
import LocationResidentListSlice from '../slices/LocationResidentListSlice';
import StaticResidentProfileSlice from '../slices/StaticResidentProfileSlice';

export default configureStore({
  reducer: {
    rickAndMortyApp: RickAndMortyAppSlice,
    characters: CharacterListSlice,
    episodes: EpisodeListSlice,
    locations: LocationListSlice,
    episodeDetails: EpisodeDetailsSlice,
    episodeCharacters: EpisodeCharacterListSlice,
    staticCharacterProfile: StaticCharacterProfileSlice,
    locationDetails: LocationDetailsSlice,
    locationResidents: LocationResidentListSlice,
    staticResidentProfile: StaticResidentProfileSlice,
  },
});
