import { authMiddleware } from "@/middleware/authMiddleware";

import { preventRoutesWithAuth } from "./middleware/preventRoutesWithAuth";

const protectedRoutes: string[] = ["/dashboard", "/profile"];
const preventRoutesWhileAuthorized: string[] = ["/login"];

export async function middleware(request) {
  const url = request.nextUrl.pathname;
  if (protectedRoutes.some((route) => url.startsWith(route))) {
    return authMiddleware(request);
  }

  if (preventRoutesWhileAuthorized.some((route) => url.startsWith(route))) {
    return preventRoutesWithAuth(request);
  }
}
export const config = {
  matcher: [...protectedRoutes.map((route) => `${route}/:path*`)],
};
