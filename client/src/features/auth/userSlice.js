import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    profile_image: "",
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export default userSlice.reducer;

export const { updateFormData, resetFormData } = userSlice.actions;
