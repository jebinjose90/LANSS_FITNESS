// src/use-cases/user/loginUser.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../infrastructure/api/userrApi/userApi';
import userEndUrls from '../../core/constants/endUrl/userEndUrls';
import { toast } from 'react-hot-toast';

export const loginUser = createAsyncThunk(
  `${userEndUrls.login}`,
  async ({ email, password , allErrors}: { email: string; password: string; allErrors: string[]}, thunkAPI) => {
    try {
      if (allErrors.length > 0) {
        toast.error(allErrors[0] || 'Login failed');
      }else{
        const response = await userApi.login(email, password);
        console.log("DATA RESP",response.data.data);
        toast.success("Logged in successfully");
        return response.data.data;
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed');
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);