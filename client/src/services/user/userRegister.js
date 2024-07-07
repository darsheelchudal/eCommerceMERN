import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

export const userRegisterApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "users/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userRegister;
