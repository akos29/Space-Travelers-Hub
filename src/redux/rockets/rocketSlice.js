/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceApi from '../../apis/spaceAPI';

export const getRockets = createAsyncThunk('rocket', async () => {
  const res = await spaceApi.get('/rockets');
  return res.data;
});

const initialState = {
  rockets: [],
  status: 'idle',
  bookedRockets: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
    cancelReserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
    },
    myReservations: (state) => {
      const newState = state.rockets.filter((rocket) => rocket.reserved);
      state.bookedRockets = newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = state.rockets.concat(action.payload);
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserve, cancelReserve, myReservations } = rocketSlice.actions;
export default rocketSlice.reducer;
