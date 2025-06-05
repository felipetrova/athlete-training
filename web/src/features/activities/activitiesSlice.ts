import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../store';
import { Activity } from './type';
import { API_BASE_URL, API_LOCAL_URL } from '../../constants';

export interface ActivitiesState {
  items: Activity[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ActivitiesState = {
  items: [],
  status: 'idle',
  error: null,
};

// 🔗 Thunk para buscar atividades
export const fetchActivities = createAsyncThunk(
  'activities/fetchActivities',
  async () => {
    const token = localStorage.getItem('strava_token');
    const apiUrl = token ? API_BASE_URL : API_LOCAL_URL;

    const response = await axios.get<Activity[]>(
      `${apiUrl}/athlete/activities`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

// 🔥 Selectors
export const selectActivities = (state: RootState) => state.activities.items;
export const selectActivitiesStatus = (state: RootState) =>
  state.activities.status;
export const selectActivitiesError = (state: RootState) =>
  state.activities.error;

export default activitiesSlice.reducer;
