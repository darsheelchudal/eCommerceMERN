import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const { add } = authSlice.actions;
