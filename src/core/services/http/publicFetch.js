import { baseFetch } from "./baseFetch";

export const publicFetch = (endpoint, options = {}) =>
  baseFetch(endpoint, options);
