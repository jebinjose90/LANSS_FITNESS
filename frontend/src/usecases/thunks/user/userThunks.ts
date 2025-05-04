// frontend/src/usecases/thunks/user/userThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../../infrastructure/api/userApi/userApi';
import { showCustomToast } from '../../toast/showCustomToast';
import toastTypeConstants from '../../../core/constants/toastTypeConstants';
import userEndUrls from '../../../core/constants/endUrl/userEndUrls';
const apiUrl: String = import.meta.env.VITE_BACKEND_URL;

export const userLoginThunk = createAsyncThunk(
  `${userEndUrls.login}`,
  async ({ email, password }: { email: string; password: string; }, thunkAPI) => {
    try {

      const response = await userApi.login(email, password);
      console.log("DATA RESP", response.data.data.role);
      showCustomToast("You have been succesfuuly logged in.", toastTypeConstants.success)
      localStorage.setItem('role', response.data.data.role)
      return response.data.data;

    } catch (error: any) {
      showCustomToast(error.response?.data?.message, toastTypeConstants.error)
      console.log(error.response?.data?.message);

      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const userSignupThunk = createAsyncThunk(
  userEndUrls.signup,
  async ({ username, email, password, phone, imageUrl}: { username: string; email: string; password: string; phone: string; imageUrl: string;}, thunkAPI) => {
    try {
        const response = await userApi.signup(username, email, password, Number(phone), imageUrl);
        return response.data?.data;
    } catch (error: any) {
      showCustomToast(error.response?.data?.message, toastTypeConstants.error)
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
      console.log("HOME DATA", response.data);

      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('userImageUrl', `${apiUrl}${response.data.imageUrl}`);
      return response.data.data;
    } catch (error: any) {
      showCustomToast(error.response?.data?.message, toastTypeConstants.error)
      return thunkAPI.rejectWithValue(error.response?.data || 'Home data fetch failed');
    }
  }
);

export const fetchProfileThunk = createAsyncThunk(
  userEndUrls.profileData,
  async (_, thunkAPI) => {
    try {
      console.log("PROFILE");

      const response = await userApi.profileData();
      console.log("profile data", response.data);
      return response.data?.data;
    } catch (error: any) {
      showCustomToast(error.response?.data?.message, toastTypeConstants.error)
      return thunkAPI.rejectWithValue(error.response?.data || 'Profile data fetch failed');
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  userEndUrls.updateUserProfile,
  async (
    payload: {
      editProfileData: { email: string; username: string; age: string; gender: string; height: string; weight: string; place: string; };
      allErrors: string[]; // or type it as needed
    },
    thunkAPI) => {
    try {
      const { editProfileData, allErrors } = payload;

      if (allErrors.length > 0) {
        showCustomToast(allErrors[0] || 'Profile Update failed', toastTypeConstants.error)
      } else {
        const response = await userApi.updateProfile(
          editProfileData.email,
          editProfileData.username,
          editProfileData.age,
          editProfileData.gender,
          editProfileData.height,
          editProfileData.weight,
          editProfileData.place
        );
        showCustomToast("Profile Updated successfully.", toastTypeConstants.success)
        return response.data;
      }
    } catch (error: any) {
      showCustomToast(error.response?.data?.message, toastTypeConstants.error)
      return thunkAPI.rejectWithValue(error.response?.data || 'Update failed');
    }
  }
);

export const userLogoutThunk = createAsyncThunk(
  userEndUrls.logout,
  async (_, thunkAPI) => {
    try {
      await userApi.logout();
      localStorage.removeItem('role');
      showCustomToast("You have been succesfuuly logged out.", toastTypeConstants.success)
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);
