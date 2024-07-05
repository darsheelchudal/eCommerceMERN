import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export default authSlice.reducer;

export const { add } = authSlice.actions;
