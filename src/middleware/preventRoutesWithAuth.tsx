import { NextResponse } from "next/server";

export const preventRoutesWithAuth = (request) => {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/dashboard", request.url));
};
