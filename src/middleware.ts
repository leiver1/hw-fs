import { validateToken } from "@/middleware/authMiddleware";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { isValid, redirectUrl } = await validateToken(request);

  if (!isValid) {
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard", "/profile", "/test"],
};
