import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/Post";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyapi.io/data/v1/",
    headers: {
      ["app-id"]: "6112dc7c3f812e0d9b6679dd",
    },
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPostsList: builder.query<
      { data: Post[] },
      { page: number; limit: number }
    >({
      query: ({ limit, page }) => `post?page=${page}&limit=${limit}`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsListQuery, useLazyGetPostsListQuery } = postsApi;
