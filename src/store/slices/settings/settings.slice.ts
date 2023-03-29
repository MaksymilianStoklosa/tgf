import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesMode, CountryCode } from "types/global.types";

interface InitialState {
  country: CountryCode;
  articlesMode: ArticlesMode;
}

const initialState: InitialState = {
  country: "pl",
  articlesMode: "grid",
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    setCountryAction: (state, action: PayloadAction<CountryCode>) => {
      state.country = action.payload;
    },
    setArticlesModeAction: (state, action: PayloadAction<ArticlesMode>) => {
      state.articlesMode = action.payload;
    },
  },
});

export const { setCountryAction, setArticlesModeAction } = settingsSlice.actions;
