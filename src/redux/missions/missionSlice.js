/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceApi from '../../apis/spaceAPI';

export const getMissions = createAsyncThunk('missions', async () => {
  const res = await spaceApi.get('/missions');
  return res.data;
});

const initialState = {
  missions: [],
  status: 'idle',
  joinedMissions: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
      state.missions = newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = state.missions.concat(action.payload);
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { changeStatus, cancelReserve, myReservations } = missionSlice.actions;
export default missionSlice.reducer;
