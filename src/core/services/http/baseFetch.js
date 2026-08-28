import QueryString from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error(
    "BASE_URL is missing. Please define NEXT_PUBLIC_BASE_URL or BASE_URL in your environment variables.",
  );
}

export const baseFetch = async (endpoint, { query, ...rest } = {}) => {
  const base = BASE_URL.replace(/\/+$/, "");
  const path = endpoint ? endpoint.replace(/^\/+/, "") : "";
  let url = path ? `${base}/${path}` : base;

  if (query && Object.keys(query).length) {
    url += `?${QueryString.stringify(query)}`;
  }

  const headers = {
    "Content-Type": "application/json",
    ...rest.headers,
  };

  let body = rest.body;
  if (body && typeof body === "object") {
    body = JSON.stringify(body);
  }

  const fetchOptions = {
    ...rest,
    headers,
    ...(body && { body }),
  };

  const res = await fetch(url, fetchOptions);

  if (res.status === 204) {
    return null;
  }

  const contentType = res.headers.get("content-type") || "";
  let data = null;

  if (contentType.includes("application/json")) {
    data = await res.json().catch(() => null);
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    const errorMsg =
      (typeof data === "object" && (data?.message || data?.error)) ||
      `Request failed with status ${res.status}`;

    const error = new Error(errorMsg);
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
};
