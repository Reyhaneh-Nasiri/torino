import { baseFetch } from "./baseFetch";

const publicFetch = (endpoint, query, cache = { cache: "force-cache" }) =>
  baseFetch(endpoint, { query, ...cache });

export { publicFetch };
