import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "../../../core/interfaces/slice.interfaces/AdminState";
import { adminLoginThunk, adminLogoutThunk } from "../../../usecases/thunks/admin/adminThunks";

const initialState: AdminState = {
  adminname: null,
  profile: null,
  loading: false,
  error: null,
  adminData: null,
  isAdminAuthenticated: localStorage.getItem('isAdminLoggedIn') === 'true',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    resetAdminError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(adminLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAdminAuthenticated = false;
        localStorage.setItem('isAdminLoggedIn', 'false');
      })

      .addCase(adminLoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.adminData = action.payload;
        state.isAdminAuthenticated = true;
        localStorage.setItem('isAdminLoggedIn', 'true');
      })

      .addCase(adminLoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAdminAuthenticated = false;
        localStorage.setItem('isAdminLoggedIn', 'false');
      })

      // Logout
      .addCase(adminLogoutThunk.fulfilled, (state) => {
        state.adminData = null;
        state.isAdminAuthenticated = false;
        localStorage.removeItem('isAdminLoggedIn'); // ✅ Clear on logout
      });

  }
})

export const { resetAdminError } = adminSlice.actions;
export default adminSlice.reducer;