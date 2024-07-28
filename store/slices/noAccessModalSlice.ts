import { createSlice } from '@reduxjs/toolkit';

const noAccessModalSlice = createSlice({
  name: 'noAccessModalSlice',
  initialState: {
    isNoAccessModalOpened: false,
  },
  reducers: {
    openNoAccessModal: (state) => {
      state.isNoAccessModalOpened = true;
    },
    closeNoAccessModal: (state) => {
      state.isNoAccessModalOpened = false;
    },
  },
});

export const { openNoAccessModal, closeNoAccessModal } =
  noAccessModalSlice.actions;

export const noAccessModalReducer = noAccessModalSlice.reducer;
