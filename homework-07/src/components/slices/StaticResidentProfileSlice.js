import { createSlice } from '@reduxjs/toolkit';

export const StaticResidentProfilSlice = createSlice({
  name: 'static-resident-profile',
  initialState: {
    characterImg: '',
    characterName: '',
    characterStatus: '',
    characterSpecies: '',
    characterGender: '',
    characterOrigin: '',
    characterOriginId: '',
    characterLocation: '',
    characterLocationId: '',
  },
  reducers: {
    setCharacterImg: (state, action) => {
      state.characterImg = action.payload;
    },
    setCharacterName: (state, action) => {
      state.characterName = action.payload;
    },
    setCharacterStatus: (state, action) => {
      state.characterStatus = action.payload;
    },
    setCharacterSpecies: (state, action) => {
      state.characterSpecies = action.payload;
    },
    setCharacterGender: (state, action) => {
      state.characterGender = action.payload;
    },
    setCharacterOrigin: (state, action) => {
      state.characterOrigin = action.payload;
    },
    setCharacterOriginId: (state, action) => {
      state.characterOriginId = action.payload;
    },
    setCharacterLocation: (state, action) => {
      state.characterLocation = action.payload;
    },
    setCharacterLocationId: (state, action) => {
      state.characterLocationId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCharacterImg,
  setCharacterName,
  setCharacterStatus,
  setCharacterSpecies,
  setCharacterGender,
  setCharacterOrigin,
  setCharacterOriginId,
  setCharacterLocation,
  setCharacterLocationId,
} = StaticResidentProfilSlice.actions;

export default StaticResidentProfilSlice.reducer;
