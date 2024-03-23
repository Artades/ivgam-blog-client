import { configureStore } from '@reduxjs/toolkit';
import MobileSheetSlice from './slices/mobileSheetSlice';

export const store = configureStore({
  reducer: {
    mobileSheet: MobileSheetSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export default store;