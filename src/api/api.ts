import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticleListResponse } from "types/article.types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getArticlesByCountry: builder.query<ArticleListResponse, string>({
      query: (country) => ({ url: `/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}` }),
    }),
  }),

  refetchOnFocus: false,
});

export const { useGetArticlesByCountryQuery } = api;
