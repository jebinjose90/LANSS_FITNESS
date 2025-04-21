// frontend/src/modules/user/redux/userThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../../infrastructure/api/userrApi/userApi';
import { showCustomToast } from '../../toast/showCustomToast';
import toastTypeConstants from '../../../core/constants/toastTypeConstants';
import userEndUrls from '../../../core/constants/endUrl/userEndUrls';
const apiUrl:String = import.meta.env.VITE_BACKEND_URL;

export const userLoginThunk = createAsyncThunk(
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

export const userSignupThunk = createAsyncThunk(
  userEndUrls.signup,
  async ({ username, email, password, phone, imageUrl }: { username: string; email: string; password: string; phone: number; imageUrl: string }, thunkAPI) => {
    try {
      const response = await userApi.signup(username, email, password, phone, imageUrl);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);

export const resendOtpThunk = createAsyncThunk(
  userEndUrls.requestResendOtp,
  async (email: string, thunkAPI) => {
    try {
      const response = await userApi.requestResendOtp(email);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Resend OTP failed');
    }
  }
);

export const userVerifyOtpThunk = createAsyncThunk(
  userEndUrls.verifyOtp,
  async ({ email, otp }: { email: string; otp: string }, thunkAPI) => {
    try {
      const response = await userApi.verifyOtp(email, otp);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'OTP verification failed');
    }
  }
);

export const fetchHomeDataThunk = createAsyncThunk(
  userEndUrls.homeData,
  async (_, thunkAPI) => {
    try {
      const response = await userApi.homeData();
      console.log("HOME DATA",response.data);
      
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('userImageUrl', `${apiUrl}${response.data.imageUrl}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Home data fetch failed');
    }
  }
);

export const fetchProfileThunk = createAsyncThunk(
  userEndUrls.profileData,
  async (_, thunkAPI) => {
    try {
      const response = await userApi.profileData();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Profile data fetch failed');
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  userEndUrls.updateUserProfile,
  async (payload: { email: string; username: string; age: string; gender: string; height: string; weight: string; place: string }, thunkAPI) => {
    try {
      const response = await userApi.updateProfile(
        payload.email,
        payload.username,
        payload.age,
        payload.gender,
        payload.height,
        payload.weight,
        payload.place
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Update failed');
    }
  }
);

export const userLogoutThunk = createAsyncThunk(
  userEndUrls.logout,
  async (_, thunkAPI) => {
    try {
      await userApi.logout();
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);
