import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rockets/rocketSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
