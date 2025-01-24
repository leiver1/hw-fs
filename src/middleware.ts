import { NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/posts",
  "/media",
  "/calendar",
  "/accounts",
  "/analytics",
  "/campaign",
  "/profile",
];

export function middleware(req) {
  // Deine Middleware-Logik
  const token = req.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// Statische Definition der matcher
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/posts/:path*",
    "/media/:path*",
    "/calendar/:path*",
    "/accounts/:path*",
    "/analytics/:path*",
    "/campaign/:path*",
    "/profile/:path*",
  ],
};
