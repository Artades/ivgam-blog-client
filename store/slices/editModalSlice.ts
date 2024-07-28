import { createSlice } from '@reduxjs/toolkit';

const editModalSlice = createSlice({
  name: 'editModalSlice',
  initialState: {
    isEditModalOpened: false,
  },
  reducers: {
    openEditModal: (state) => {
      state.isEditModalOpened = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpened = false;
    },
  },
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;

export const editModalReducer = editModalSlice.reducer;
