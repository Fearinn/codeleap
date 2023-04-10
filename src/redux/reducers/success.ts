import { createSlice } from "@reduxjs/toolkit";
import { setter } from "../../actions/common";

const initialState = false;

const successSlice = createSlice({
  name: "success",
  initialState,
  reducers: {
    setSuccess: setter<boolean>,
  },
});

export const successReducer = successSlice.reducer;
export const successActions = successSlice.actions;
