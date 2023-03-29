import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "types/article.types";

interface InitialState {
  articles: Article[];
  totalResults: number;
}

const initialState: InitialState = {
  articles: [],
  totalResults: 0,
};

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {
    setArticlesAction: (state, action: PayloadAction<{ articles: Article[]; totalResults: number }>) => {
      const { articles, totalResults } = action.payload;

      state.articles = articles;
      state.totalResults = totalResults;
    },
  },
});

export const { setArticlesAction } = articlesSlice.actions;
