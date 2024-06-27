import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    id: 0,
    role: "",
    authStatus: "not authenticated"
  },
  reducers: {
    setAuthStatus: (state) => {
      state.authStatus = 'authenticated';
    },
    removeAuthStatus: (state) => {
      state.authStatus = 'not authenticated';
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    resetUser: (state) => {
      state.id = 0;
      state.role = "";
      state.authStatus = 'not authenticated';
    }
  },
});

export const { setAuthStatus, removeAuthStatus, setUserId, setUserRole, resetUser } = userSlice.actions;
export default userSlice.reducer;
