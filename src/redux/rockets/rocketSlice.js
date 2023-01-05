/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import spaceApi from '../../apis/spaceAPI';

const initialState = {
  rockets: [],
  reserved: 0,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    getRockets: (state, action) => {
      state.rockets = action.payload;
    },
    reserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
  },
});

export const { getRockets, reserve } = rocketSlice.actions;
export default rocketSlice.reducer;

// const { getRockets } = rocketSlice.actions;

export const displayRockets = () => async (dispatch) => {
  try {
    await spaceApi.get('/rockets')
      .then((res) => {
        dispatch(getRockets(res.data));
      });
  } catch (err) {
    console.log('Something went wrong');
  }
};
