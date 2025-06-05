import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../store';
import { Profile } from './type';
import { API_BASE_URL, API_LOCAL_URL } from '../../constants';

export interface ProfileState {
  data: Profile | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const token = localStorage.getItem('strava_token');
    const apiUrl = token ? API_BASE_URL : API_LOCAL_URL;
    //
    const response = await axios.get<Profile>(`${API_BASE_URL}/athlete`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const selectProfile = (state: RootState) => state.profile.data;
export const selectProfileStatus = (state: RootState) => state.profile.status;
export const selectProfileError = (state: RootState) => state.profile.error;

export default profileSlice.reducer;
