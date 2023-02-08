import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  count: number;
}
const initialState: InitialState = {
  count: 0,
};

export const incrementThunk = createAsyncThunk(
  "countUp",
  async (number: number, { dispatch }) => {
    try {
      dispatch(increment(number));
    } catch (error) {
      console.log(error);
    }
  }
);

const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

const { reducer, actions } = countSlice;
export const { increment } = actions;
export default reducer;
