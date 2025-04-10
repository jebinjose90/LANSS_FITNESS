// src/interface-adapters/redux/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../../usecases/user/loginUser';
import { UserState } from '../../../core/interfaces/slice.interfaces/UserState';


const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
