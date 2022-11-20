import { createSlice } from '@reduxjs/toolkit';

export const CharacterListSlice = createSlice({
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
export const { setCharacterList } = CharacterListSlice.actions;

export default CharacterListSlice.reducer;
