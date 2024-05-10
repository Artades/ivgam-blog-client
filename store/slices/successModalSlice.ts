import { createSlice } from '@reduxjs/toolkit';

const successModalSlice = createSlice({
  name: 'successModalSlice',
  initialState: {
    isSuccessModalOpened: false,
  },
  reducers: {
    openSuccessModal: (state) => {
      state.isSuccessModalOpened = true;
    },
    closeSuccessModal: (state) => {
      state.isSuccessModalOpened = false;
    },
  },
});




export const { openSuccessModal, closeSuccessModal } = successModalSlice.actions;

export const successModalReducer = successModalSlice.reducer;
