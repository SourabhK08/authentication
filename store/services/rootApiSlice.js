import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rootApiSlice = createApi({
  reducerPath: "api", // Optional but recommended
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: () => ({}), // Will inject endpoints later
});

export default rootApiSlice;
