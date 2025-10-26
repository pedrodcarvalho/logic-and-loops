import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: (localStorage.getItem('theme') as ThemeMode) || 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<ThemeMode>): void => {
      state.mode = action.payload;
    },
    toggleTheme: (state: ThemeState): void => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
