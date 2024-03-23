import { configureStore } from '@reduxjs/toolkit';
import MobileSheetSlice from './slices/MobileSheetSlice';

export const store = configureStore({
  reducer: {
    mobileSheet: MobileSheetSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
