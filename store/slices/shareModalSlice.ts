import { createSlice } from '@reduxjs/toolkit';

const shareModalSlice = createSlice({
  name: 'shareModalSlice',
  initialState: {
    isShareModalOpened: false,
  },
  reducers: {
    openShareModal: (state) => {
      state.isShareModalOpened = true;
    },
    closeShareModal: (state) => {
      state.isShareModalOpened = false;
    },
  },
});

export const { openShareModal, closeShareModal } = shareModalSlice.actions;

export const shareModalReducer = shareModalSlice.reducer;
