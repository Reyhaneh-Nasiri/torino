// Set Cookie
const setCookie = (name, value, options = {}) => {
  if (typeof window === "undefined") return;

  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value || "");
  let cookieParts = [];
  cookieParts.push(`${encodedName}=${encodedValue}`);

  let expirationString = "";
  if (options.maxAgeSeconds !== undefined) {
    expirationString = `max-age=${options.maxAgeSeconds}`;
  } else if (options.days !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * (24 * 60 * 60 * 1000));
    expirationString = `expires=${date.toUTCString()}`;
  }

  if (expirationString) {
    cookieParts.push(expirationString);
  }

  cookieParts.push(`path=${options.path || "/"}`);

  document.cookie = cookieParts.join("; ");
};


// Get Cookie
const getCookie = (name) => {
  if (typeof document === "undefined") return null;

  const cookieString = `; ${document.cookie}`;
  const nameEq = `${name}=`;
  let cookieValue = null;

  const cookies = cookieString.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    cookie = cookie.trim();

    if (cookie.startsWith(nameEq)) {
      cookieValue = cookie.substring(nameEq.length);
      break;
    }
  }

  if (cookieValue !== null) {
    try {
      return decodeURIComponent(cookieValue);
    } catch (e) {
      console.error("Error decoding cookie value:", cookieValue, e);
      return cookieValue;
    }
  }
  return null;
};

// Remove Cookie
const removeCookie = (name) => {
  if (typeof window === "undefined") return;
  document.cookie = [
    `${encodeURIComponent(name)}=`,
    "max-age=0",
    "path=/",
  ].join("; ");
};

export { getCookie, setCookie, removeCookie };


