import { createSlice } from '@reduxjs/toolkit';

export const EpisodeListSlice = createSlice({
  name: 'episode-list',
  initialState: {
    episodeList: [],
  },
  reducers: {
    setEpisodeList: (state, action) => {
      state.episodeList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEpisodeList } = EpisodeListSlice.actions;

export default EpisodeListSlice.reducer;
