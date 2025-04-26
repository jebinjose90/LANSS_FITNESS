// frontend/src/modules/user/redux/adminThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import adminEndUrls from "../../../core/constants/endUrl/adminEndUrls";
import { showCustomToast } from "../../toast/showCustomToast";
import toastTypeConstants from "../../../core/constants/toastTypeConstants";
import { adminApi } from "../../../infrastructure/api/adminApi/adminApi";


export const adminLoginThunk = createAsyncThunk(
  `${adminEndUrls.login}`,
  async ({ email, password, allErrors }: { email: string; password: string; allErrors: string[] }, thunkAPI) => {
    try {
      if (allErrors.length > 0) {
        showCustomToast(allErrors[0] || 'Login failed', toastTypeConstants.error)
      } else {
        const response = await adminApi.login(email, password);
        showCustomToast("You have been succesfuuly logged in.", toastTypeConstants.success)
        localStorage.setItem('role', response.data.data.role)
        return response.data.data;
      }
    } catch (err: any) {
      showCustomToast(err.response?.data?.message, toastTypeConstants.error)
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

export const adminLogoutThunk = createAsyncThunk(
  adminEndUrls.logout,
  async (_, thunkAPI) => {
    try {
      await adminApi.logout();
      localStorage.removeItem('role');
      showCustomToast("You have been succesfuuly logged out.", toastTypeConstants.success)
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);