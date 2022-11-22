import { configureStore } from '@reduxjs/toolkit';
import RickAndMortyAppSlice from '../slices/RickAndMortyAppSlice';
import CharacterListSlice from '../slices/CharacterListSlice';
import EpisodeDetailsSlice from '../slices/EpisodeDetailsSlice';
import LocationDetailsSlice from '../slices/LocationDetailsSlice';
import StaticCharacterProfileSlice from '../slices/StaticCharacterProfileSlice';

export default configureStore({
  reducer: {
    rickAndMortyApp: RickAndMortyAppSlice,
    characters: CharacterListSlice,
    episodes: EpisodeDetailsSlice,
    locations: LocationDetailsSlice,
    staticCharacterProfile: StaticCharacterProfileSlice,
  },
});
