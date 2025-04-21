// frontend/src/modules/user/redux/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLoginThunk, userSignupThunk, userVerifyOtpThunk, resendOtpThunk, fetchHomeDataThunk, fetchProfileThunk, updateUserProfileThunk, userLogoutThunk} from '../../../usecases/thunks/user/userThunks';
import { UserState } from '../../../core/interfaces/slice.interfaces/UserState';

const initialState: UserState = {
  username: null,
  imageUrl: null,
  profile: null,
  loading: false,
  error: null,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(userLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
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
      })
      .addCase(userVerifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userVerifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
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
        state.userData = action.payload;
      })
      .addCase(fetchProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update Profile
      .addCase(updateUserProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Logout
      .addCase(userLogoutThunk.fulfilled, (state) => {
        state.userData = null;
      });
  },
});

export const { resetUserError } = userSlice.actions;
export default userSlice.reducer;
