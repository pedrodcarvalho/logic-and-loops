import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state: ExampleState): void => {
      state.value += 1;
    },
    decrement: (state: ExampleState): void => {
      state.value -= 1;
    },
    incrementByAmount: (state: ExampleState, action: PayloadAction<number>): void => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;
export default exampleSlice.reducer;
