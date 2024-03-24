import { createSlice } from '@reduxjs/toolkit';

const loginModalSlice = createSlice({
  name: 'loginModalSlice',
  initialState: {
    isLoginModalOpened: false,
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpened = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpened = false;
    },
  },
});

const registerModalSlice = createSlice({
  name: 'registerModalSlice',
  initialState: {
    isRegisterModalOpened: false,
  },
  reducers: {
    openRegisterModal: (state) => {
      state.isRegisterModalOpened = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpened = false;
    },
  },
});

export const {
  openRegisterModal,
  closeRegisterModal
} = registerModalSlice.actions;

export const {
  openLoginModal,
  closeLoginModal
} = loginModalSlice.actions;

export const registerModalReducer = registerModalSlice.reducer;
export const loginModalReducer = loginModalSlice.reducer;
