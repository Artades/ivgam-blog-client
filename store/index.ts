import { configureStore } from '@reduxjs/toolkit';
import MobileSheetSlice from './slices/mobileSheetSlice';
import authStatusSlice from './slices/authStatusSlice';
import { loginModalReducer, registerModalReducer } from './slices/authModalsSlice';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    registerModal: registerModalReducer,
    mobileSheet: MobileSheetSlice,
    authStatus: authStatusSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export default store;