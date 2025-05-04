// frontend/src/modules/user/redux/trainerThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import trainerEndUrls from "../../../core/constants/endUrl/trainerEndUrls";
import { showCustomToast } from "../../toast/showCustomToast";
import toastTypeConstants from "../../../core/constants/toastTypeConstants";
import { trainerApi } from "../../../infrastructure/api/trainerApi/trainerApi";


export const trainerLoginThunk = createAsyncThunk(
  `${trainerEndUrls.login}`,
  async ({ email, password}: { email: string; password: string;}, thunkAPI) => {
    try {
      const response = await trainerApi.login(email, password);
      showCustomToast("You have been succesfuuly logged in.", toastTypeConstants.success)
      localStorage.setItem('role', response.data.data.role)
      return response.data.data;
    } catch (err: any) {
      showCustomToast(err.response?.data?.message, toastTypeConstants.error)
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

export const trainerSignupThunk = createAsyncThunk(
  trainerEndUrls.signup,
  async ({ username, email, password, phone, imageUrl, certificatePdfUrl }: { username: string, email: string, password: string, phone: number, imageUrl: string, certificatePdfUrl: string }, thunkAPI) => {
    try {
      const response = await trainerApi.signup(username, email, password, phone, imageUrl, certificatePdfUrl);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);

export const resendOtpThunk = createAsyncThunk(
  trainerEndUrls.requestResendOtp,
  async (email: string, thunkAPI) => {
    try {
      const response = await trainerApi.requestResendOtp(email);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Resend OTP failed');
    }
  }
);

export const trainerVerifyOtpThunk = createAsyncThunk(
  trainerEndUrls.verifyOtp,
  async ({ email, otp }: { email: string; otp: string }, thunkAPI) => {
    try {
      const response = await trainerApi.verifyOtp(email, otp);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'OTP verification failed');
    }
  }
);

export const trainerProfileDataThunk = createAsyncThunk(
  trainerEndUrls.profile,
  async (_, thunkAPI) => {
    try {
      const response = await trainerApi.profileData();
      console.log("HOME DATA", response.data);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Home data fetch failed');
    }
  }
);

export const trainerLogoutThunk = createAsyncThunk(
  trainerEndUrls.logout,
  async (_, thunkAPI) => {
    try {
      await trainerApi.logout();
      localStorage.removeItem('role');
      showCustomToast("You have been succesfuuly logged out.", toastTypeConstants.success)
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);