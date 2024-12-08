import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return NextResponse.json(
      { message: "you cant logout, you are not auth" },
      { status: 400 }
    );
  }

  const response = NextResponse.json(
    { message: "Successfully logged out" },
    { status: 200 }
  );

  response.cookies.set("token", "", { maxAge: 0 });
  return response;
};
