import { createSlice } from "@reduxjs/toolkit";
import { TrainerState } from "../../../core/interfaces/slice.interfaces/TrainerState";
import { trainerLoginThunk, trainerLogoutThunk, trainerSignupThunk } from "../../../usecases/thunks/trainer/trainerThunks";

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