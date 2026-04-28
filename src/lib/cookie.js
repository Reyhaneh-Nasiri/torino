import { cookies } from "next/headers";

export const getCookie = async (name) => {
  const cookieStore = await cookies();

  const cookieValue = cookieStore.get(name)?.value;
  if (typeof cookies === "undefined") {
    console.warn("getCookie called on client, but this is the server version.");
    return null;
  }

  if (cookieValue !== undefined) {
    try {
      return decodeURIComponent(cookieValue);
    } catch (e) {
      console.error("Server-side error decoding cookie:", cookieValue, e);
      return cookieValue;
    }
  }
  return null;
};
