import { createSlice } from '@reduxjs/toolkit';

export const EpisodeCharacterListSlice = createSlice({
  name: 'character-list',
  initialState: {
    characterList: [],
  },
  reducers: {
    setCharacterList: (state, action) => {
      state.characterList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCharacterList } = EpisodeCharacterListSlice.actions;

export default EpisodeCharacterListSlice.reducer;
