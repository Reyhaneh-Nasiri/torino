import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  console.log("Token received by middleware:", token);
  const protectedPaths = ["/dashboard"];

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path),
  );

  if (token && isProtectedRoute) {
    return NextResponse.next();
  }

  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
