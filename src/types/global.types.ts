import { store } from "store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type CountryCode = "pl" | "gb" | "fr";
export type ArticlesMode = "grid" | "list";
