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
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      state.missions = newState;
    },
    cancelMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: false };
      });
      state.missions = newState;
    },
    myMissions: (state) => {
      const newState = state.missions.filter((mission) => mission.reserved);
      state.joinedMissions = newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = [...action.payload];
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { changeStatus, cancelMission, myMissions } = missionSlice.actions;
export default missionSlice.reducer;
