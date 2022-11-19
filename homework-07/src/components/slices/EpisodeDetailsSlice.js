import { createSlice } from '@reduxjs/toolkit';

export const EpisodeDetailsSlice = createSlice({
  name: 'episode-details',
  initialState: {
    air_date: '',
    episode: '',
    id: '',
    name: '',
  },
  reducers: {
    setEpisodeDetailsAirDate: (state, action) => {
      state['air_date'] = action.payload;
    },
    setEpisodeDetailsEpisode: (state, action) => {
      state.episode = action.payload;
    },
    setEpisodeDetailsId: (state, action) => {
      state.id = action.payload;
    },
    setEpisodeDetailsName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEpisodeDetailsAirDate,
  setEpisodeDetailsEpisode,
  setEpisodeDetailsId,
  setEpisodeDetailsName,
} = EpisodeDetailsSlice.actions;

export default EpisodeDetailsSlice.reducer;
