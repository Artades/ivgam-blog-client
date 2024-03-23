import { createSlice } from '@reduxjs/toolkit';

const mobileSheetSlice = createSlice({
  name: 'mobileSheetSlice',
  initialState: {
    isOpened: false,
  },
  reducers: {
    open: (state) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
  },
});

export const { open, close } = mobileSheetSlice.actions;
export default mobileSheetSlice.reducer;
