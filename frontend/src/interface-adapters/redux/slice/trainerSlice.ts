import { createSlice } from "@reduxjs/toolkit";
import { TrainerState } from "../../../core/interfaces/slice.interfaces/TrainerState";
import { trainerLoginThunk, trainerLogoutThunk, trainerSignupThunk, resendOtpThunk, trainerVerifyOtpThunk ,trainerProfileDataThunk} from "../../../usecases/thunks/trainer/trainerThunks";

const initialState: TrainerState = {
  trainername: null,
  imageUrl: null,
  profile: null,
  loading: false,
  error: null,
  trainerData: null,
  isTrainerAuthenticated: localStorage.getItem('isTrainerLoggedIn') === 'true',
};

const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    resetTrainerError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(trainerLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isTrainerAuthenticated = false;
        localStorage.setItem('isTrainerLoggedIn', 'false');
      })

      .addCase(trainerLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.trainerData = action.payload;
        state.isTrainerAuthenticated = true;
        localStorage.setItem('isTrainerLoggedIn', 'true');
      })

      .addCase(trainerLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isTrainerAuthenticated = false;
        localStorage.setItem('isTrainerLoggedIn', 'false');
      })

      // Signup
      .addCase(trainerSignupThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trainerSignupThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.trainerData = action.payload;
      })
      .addCase(trainerSignupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // OTP Verification
      .addCase(trainerVerifyOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trainerVerifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.trainerData = action.payload;
      })
      .addCase(trainerVerifyOtpThunk.rejected, (state, action) => {
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
        state.trainerData = action.payload;
      })
      .addCase(resendOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Profile
      .addCase(trainerProfileDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trainerProfileDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.trainerData = action.payload;
      })
      .addCase(trainerProfileDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      })

      // Logout
      .addCase(trainerLogoutThunk.fulfilled, (state) => {
        state.trainerData = null;
        state.isTrainerAuthenticated = false;
        localStorage.removeItem('isTrainerLoggedIn'); // ✅ Clear on logout
      });
  }
})

export const { resetTrainerError } = trainerSlice.actions;
export default trainerSlice.reducer;