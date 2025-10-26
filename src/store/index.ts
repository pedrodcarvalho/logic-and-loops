import { configureStore, type Store } from '@reduxjs/toolkit';

import { exampleSlice } from '@/store/slices/exampleSlice';
import { themeSlice } from '@/store/slices/themeSlice';

export const store: Store = configureStore({
  reducer: {
    exampleSlice: exampleSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
