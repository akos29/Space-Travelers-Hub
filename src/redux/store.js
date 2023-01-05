import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

import rocketReducer from './rockets/rocketSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

// const reducer = combineReducers({
//   rockets: rocketReducer,
// });

// const store = configureStore({
//   reducer,
// });

export default store;
