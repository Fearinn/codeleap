import { TPost } from "./TPost";

export type TResponse = {
  results: TPost[];
  count: number;
  next: string | null;
  previous: string | null;
};
