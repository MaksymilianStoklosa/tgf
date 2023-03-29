import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { api } from "api/api";
import { articlesSlice } from "./slices/articles/articles.slice";
import { settingsSlice } from "./slices/settings/settings.slice";

export const appReducer = combineReducers({
  settings: settingsSlice.reducer,
  articles: articlesSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
