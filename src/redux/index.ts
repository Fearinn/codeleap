import { configureStore } from "@reduxjs/toolkit";
import { usernameReducer } from "./reducers/username";
import { postsReducer } from "./reducers/posts";
import { errorReducer } from "./reducers/error";
import { successReducer } from "./reducers/success";

export const store = configureStore({
  reducer: {
    usernameReducer,
    postsReducer,
    errorReducer,
    successReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
