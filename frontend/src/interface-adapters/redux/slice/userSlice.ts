// frontend/src/modules/user/redux/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLoginThunk, userSignupThunk, userVerifyOtpThunk, resendOtpThunk, fetchHomeDataThunk, fetchProfileThunk, updateUserProfileThunk, userLogoutThunk } from '../../../usecases/thunks/user/userThunks';
import { UserState } from '../../../core/interfaces/slice.interfaces/UserState';

const initialState: UserState = {
  username: null,
  imageUrl: null,
  profile: null,
  loading: false,
  error: null,
  userData: null,
  isUserAuthenticated: localStorage.getItem('isUserLoggedIn') === 'true',
  profileUpdateSuccess: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserError: (state) => {
      state.error = null;
    },
    resetProfileUpdateSuccess: (state) => {
      state.profileUpdateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(userLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isUserAuthenticated = false;
        localStorage.setItem('isUserLoggedIn', 'false');
      })

      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isUserAuthenticated = true;
        localStorage.setItem('isUserLoggedIn', 'true');
      })

      .addCase(userLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isUserAuthenticated = false;
        localStorage.setItem('isUserLoggedIn', 'false');
      })

      // Signup
      .addCase(userSignupThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignupThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userSignupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // OTP Verification
      .addCase(userVerifyOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isUserAuthenticated = false;
        localStorage.removeItem('isUserLoggedIn');
      })
      .addCase(userVerifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        localStorage.removeItem('email');
        state.isUserAuthenticated = true;
        localStorage.setItem('isUserLoggedIn', 'true');
      })
      .addCase(userVerifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isUserAuthenticated = false;
        localStorage.removeItem('isUserLoggedIn');
      })

      // Resend OTP
      .addCase(resendOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(resendOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Home
      .addCase(fetchHomeDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchHomeDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Profile
      .addCase(fetchProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update Profile
      .addCase(updateUserProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileUpdateSuccess = false;
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.profileUpdateSuccess = true;
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.profileUpdateSuccess = false;
      })

      // Logout
      .addCase(userLogoutThunk.fulfilled, (state) => {
        state.userData = null;
        state.isUserAuthenticated = false;
        localStorage.removeItem('isUserLoggedIn'); // ✅ Clear on logout
      });
  },
});

export const { resetProfileUpdateSuccess } = userSlice.actions;
export const { resetUserError } = userSlice.actions;
export default userSlice.reducer;
