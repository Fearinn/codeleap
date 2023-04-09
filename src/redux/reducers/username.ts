import { createSlice } from "@reduxjs/toolkit";
import { setter } from "../../actions/common";

const initialState = "";

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: setter<string>,
  },
});

export const usernameReducer = usernameSlice.reducer;
export const usernameActions = usernameSlice.actions;
