import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const shareModalSlice = createSlice({
  name: 'shareModalSlice',
  initialState: {
    isShareModalOpened: false,
    shareLink: '', // Add a new property to hold the share link
  },
  reducers: {
    openShareModal: (state) => {
      state.isShareModalOpened = true;
    },
    closeShareModal: (state) => {
      state.isShareModalOpened = false;
    },
    setShareLink: (state, action: PayloadAction<string>) => {
      state.shareLink = action.payload;
    },
    clearShareLink: (state) => {
      state.shareLink = "";
    },
  },
});

// Export the actions, including setShareLink
export const { openShareModal, closeShareModal, setShareLink , clearShareLink} =
  shareModalSlice.actions;

// Export the reducer
export const shareModalReducer = shareModalSlice.reducer;
