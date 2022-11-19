import { createSlice } from '@reduxjs/toolkit';

export const CharacterListSlice = createSlice({
  name: 'episode-details',
  initialState: {
    air_date: '',
    characters: [],
    episode: '',
    id: '',
    name: '',
  },
  reducers: {
    setCharacterListEpisodeDetailsAirDate: (state, action) => {
      state['air_date'] = action.payload;
    },
    setCharacterListEpisodeDetailsCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCharacterListEpisodeDetailsEpisode: (state, action) => {
      state.episode = action.payload;
    },
    setCharacterListEpisodeDetailsId: (state, action) => {
      state.id = action.payload;
    },
    setCharacterListEpisodeDetailsName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterListEpisodeDetailsAirDate,
  setCharacterListEpisodeDetailsCharacters,
  setCharacterListEpisodeDetailsEpisode,
  setCharacterListEpisodeDetailsId,
  setCharacterListEpisodeDetailsName,
} = CharacterListSlice.actions;

export default CharacterListSlice.reducer;
