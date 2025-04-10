// src/use-cases/user/loginUser.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../infrastructure/api/userApi';
import userEndUrls from '../../core/constants/endUrl/userEndUrls';

export const loginUser = createAsyncThunk(
  `${userEndUrls.login}`,
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await userApi.login(email, password);
      console.log("DATA RESP",response.data.data);
      
      return response.data.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);