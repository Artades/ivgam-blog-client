import { configureStore } from '@reduxjs/toolkit';
import MobileSheetSlice from './slices/mobileSheetSlice';
import authStatusSlice from './slices/authStatusSlice';
import { loginModalReducer, registerModalReducer } from './slices/authModalsSlice';
import { successModalReducer } from './slices/successModalSlice';
import userSlice from './slices/userSlice';
import { editModalReducer } from './slices/editModalSlice';
import { noAccessModalReducer } from './slices/noAccessModalSlice';
import { shareModalReducer } from './slices/shareModalSlice';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    registerModal: registerModalReducer,
    mobileSheet: MobileSheetSlice,
    authStatus: authStatusSlice,
    successModal: successModalReducer,
    shareModal: shareModalReducer,
    editModal: editModalReducer,
    noAccessModal: noAccessModalReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export default store;