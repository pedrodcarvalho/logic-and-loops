import { configureStore, type Store } from '@reduxjs/toolkit';

import { exampleSlice } from '@/store/slices/exampleSlice';

export const store: Store = configureStore({
  reducer: {
    exampleSlice: exampleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
