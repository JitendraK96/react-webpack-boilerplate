import { configureStore } from '@reduxjs/toolkit';
import coreReducer from './coreSlice.js';

export const store = configureStore({
  reducer: {
    core: coreReducer,
  },
});
