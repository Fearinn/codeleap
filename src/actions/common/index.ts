import { PayloadAction } from "@reduxjs/toolkit";

export function setter<T>(_: T, { payload }: PayloadAction<T>) {
  return payload;
}
