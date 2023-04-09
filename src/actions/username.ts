import { PayloadAction } from "@reduxjs/toolkit";

export function setUsername(state: string, { payload }: PayloadAction<string>) {
  sessionStorage.setItem("username", state);
  return payload;
}
