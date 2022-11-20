import { createSlice } from '@reduxjs/toolkit';

export const LocationListSlice = createSlice({
  name: 'location-list',
  initialState: {
    locationList: [],
  },
  reducers: {
    setLocationList: (state, action) => {
      state.locationList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationList } = LocationListSlice.actions;

export default LocationListSlice.reducer;
