import { createSlice } from "@reduxjs/toolkit";
import { setter } from "../../actions/common";

const initialState = false;

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: setter<boolean>,
  },
});

export const errorReducer = errorSlice.reducer;
export const errorActions = errorSlice.actions;
