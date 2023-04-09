import { configureStore } from "@reduxjs/toolkit";
import { usernameReducer } from "./reducers/username";
import { postsReducer } from "./reducers/posts";

export const store = configureStore({
  reducer: {
    usernameReducer,
    postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
