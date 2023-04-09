import { createSlice } from "@reduxjs/toolkit";
import { TPost } from "../../types/TPost";
import { setter } from "../../actions/common";

const initialState: TPost[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: setter<TPost[]>,
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
