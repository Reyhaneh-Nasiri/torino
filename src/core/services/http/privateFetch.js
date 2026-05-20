import { getCookie } from "@/lib/cookie";
import { baseFetch } from "./baseFetch";

export const privateFetch = async (endpoint, options = {}) => {
  const token = await getCookie("accessToken");

  const headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.body && { "Content-Type": "application/json" }),
  };

  return baseFetch(endpoint, { ...options, headers });
};
