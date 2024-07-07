import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import { userRegisterApi } from "../services/user/userRegister";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userRegisterApi.reducerPath]: userRegisterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userRegisterApi.middleware),
});
