// src/interface-adapters/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import trainerReducer from './slice/trainerSlice';
import adminReducer from './slice/adminSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    trainer: trainerReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
