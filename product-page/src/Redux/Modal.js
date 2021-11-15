import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: 'none',
};

export const cartOpenSlice = createSlice({
  name: 'opener',
  initialState,
  reducers: {
    closeCart: (state) => {
      state.open = 'none';
    },
    openCart: (state) => {
      state.open = 'block';
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeCart, openCart } = cartOpenSlice.actions;

export default cartOpenSlice.reducer;
