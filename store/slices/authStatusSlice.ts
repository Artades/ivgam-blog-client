import { createSlice } from '@reduxjs/toolkit';

const authStatusSlice = createSlice({
  name: 'mobileSheetSlice',
  initialState: {
    authStatus: 'not authenticated',
  },
  reducers: {
    setAuthStatus: (state) => {
      state.authStatus = 'authenticated';
    },
    removeAuthStatus: (state) => {
      state.authStatus = 'not authenticated';
    },
  },
});

export const { setAuthStatus, removeAuthStatus } = authStatusSlice.actions;
export default authStatusSlice.reducer;
