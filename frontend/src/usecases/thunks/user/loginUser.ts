// src/use-cases/user/loginUser.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../../infrastructure/api/userrApi/userApi';
import userEndUrls from '../../../core/constants/endUrl/userEndUrls';
import { showCustomToast } from '../../toast/showCustomToast';
import toastTypeConstants from '../../../core/constants/toastTypeConstants';


export const loginUser = createAsyncThunk(
  `${userEndUrls.login}`,
  async ({ email, password , allErrors}: { email: string; password: string; allErrors: string[]}, thunkAPI) => {
    try {
      if (allErrors.length > 0) {
        showCustomToast(allErrors[0] || 'Login failed',toastTypeConstants.error)
      }else{
        const response = await userApi.login(email, password);
        console.log("DATA RESP",response.data.data);
        showCustomToast("Logged in successfully",toastTypeConstants.success)
        return response.data.data;
      }
    } catch (err: any) {
      showCustomToast(err.response?.data?.message,toastTypeConstants.error)
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    } 
  }
);