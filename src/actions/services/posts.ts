import { instance } from ".";
import { TPost } from "../../types/TPost";
import { TResponse } from "../../types/TResponse";

export const postsService = {
  fetch: async () => {
    const response = await instance.get<TResponse>("");
    console.log(response.data);
    return response.data;
  },
  save: async (username: string, title: string, content: string) => {
    const response = await instance.post<TPost>("", {
      username,
      title,
      content,
    });
    return response.status;
  },
};
