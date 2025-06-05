import rootApiSlice from "./rootApiSlice";

export const loginApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAddLoginMutation } = loginApi;
