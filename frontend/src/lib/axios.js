import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://rant-plus.vercel.app/api" : "/api",
  withCredentials: true,
});
