import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import modalReducer from './Modal';
export const store = configureStore({
  reducer: { counter: counterReducer, opener: modalReducer },
});
