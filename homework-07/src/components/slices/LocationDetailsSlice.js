import { createSlice } from '@reduxjs/toolkit';

export const LocationDetailsSlice = createSlice({
  name: 'location-details',
  initialState: {
    id: '',
    dimension: '',
    name: '',
    type: '',
  },
  reducers: {
    setLocationDetailsId: (state, action) => {
      state.id = action.payload;
    },
    setLocationDetailsDimension: (state, action) => {
      state.dimension = action.payload;
    },
    setLocationDetailsName: (state, action) => {
      state.name = action.payload;
    },
    setLocationDetailsType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLocationDetailsId,
  setLocationDetailsDimension,
  setLocationDetailsName,
  setLocationDetailsType,
} = LocationDetailsSlice.actions;

export default LocationDetailsSlice.reducer;
