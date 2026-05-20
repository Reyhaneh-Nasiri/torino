import QueryString from "qs";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || "";

export const baseFetch = async (
  endpoint,
  { query, cache = "no-store", ...rest } = {},
) => {
  let url = `${BASE_URL}${endpoint || ""}`;

  if (query && Object.keys(query).length) {
    url += `?${QueryString.stringify(query)}`;
  }

  const res = await fetch(url, { cache, ...rest });

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw new Error(res.status, data);
  }

  return data;
};
