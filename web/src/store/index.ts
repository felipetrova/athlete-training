import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../features/profile/profileSlice';
import activitiesReducer from '../features/activities/activitiesSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    activities: activitiesReducer,
  },
});

// Tipagem da store e do dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
