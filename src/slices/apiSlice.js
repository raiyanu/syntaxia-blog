import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    // getUsers: builder.query({
    //   query: () => "users",
    // }
    // ),
  }),
});

// export const { useGetUsersQuery } = apiSlice;
