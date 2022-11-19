import { createSlice } from '@reduxjs/toolkit';

export const LocationResidentListSlice = createSlice({
  name: 'location-resident-list',
  initialState: {
    locationResidentList: [],
  },
  reducers: {
    setLocationResidentList: (state, action) => {
      state.locationResidentList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationResidentList } = LocationResidentListSlice.actions;

export default LocationResidentListSlice.reducer;
