import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import modalReducer from './Modal';
import menuReducer from './Menu';
import backgroundReducer from './Background';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    opener: modalReducer,
    menu: menuReducer,
    background: backgroundReducer,
  },
});
