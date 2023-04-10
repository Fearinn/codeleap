import axios from "axios";
import { instance } from ".";
import { TPost } from "../../types/TPost";
import { TResponse } from "../../types/TResponse";

export const postsService = {
  fetch: async () => {
    const response = await instance.get<TResponse>("");
    return response.data;
  },
  fetchPaginated: async (path = "https://dev.codeleap.co.uk/careers/") => {
    const response = await axios.get<TResponse>(path);
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
  edit: async (id: number, title: string, content: string) => {
    const response = await instance.patch<TPost>(`${id.toString()}/`, {
      title,
      content,
    });
    return response.status;
  },
  delete: async (id: number) => {
    const response = await instance.delete<TPost>(`${id.toString()}/`);
    return response.status;
  },
};
