import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: '-100%',
};

export const menuOpenSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.open = '-100%';
    },
    openMenu: (state) => {
      state.open = '0';
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeMenu, openMenu } = menuOpenSlice.actions;

export default menuOpenSlice.reducer;
