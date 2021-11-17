import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundDisplay: 'none',
};

export const backgroundShowSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    hideBackground: (state) => {
      state.backgroundDisplay = 'none';
    },
    showBackground: (state) => {
      state.backgroundDisplay = 'block';
    },
  },
});

// Action creators are generated for each case reducer function
export const { showBackground, hideBackground } = backgroundShowSlice.actions;

export default backgroundShowSlice.reducer;
