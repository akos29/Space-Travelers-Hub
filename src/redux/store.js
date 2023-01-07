import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
