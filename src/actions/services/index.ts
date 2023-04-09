import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
});

