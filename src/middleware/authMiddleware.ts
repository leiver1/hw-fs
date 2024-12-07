import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const authMiddleware = async (request) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET); // TextEncoder für den Secret-String
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};
