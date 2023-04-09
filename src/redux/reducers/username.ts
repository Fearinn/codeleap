import { createSlice } from "@reduxjs/toolkit";
import { setUsername } from "../../actions/username";

const initialState = sessionStorage.getItem("username") ?? "";

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: setUsername,
  },
});

export const usernameReducer = usernameSlice.reducer;
export const usernameActions = usernameSlice.actions;
