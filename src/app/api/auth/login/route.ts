import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prismaClient";
import { correctPassword } from "@/utils/validations";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const secret = process.env.JWT_SECRET;
  const tokenExpires = "1h";
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return NextResponse.json(
      { message: "The given credentials are wrong!" },
      { status: 401 }
    );
  }
  const isPasswordCorrect = await correctPassword(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json(
      { message: "The given credentials are wrong!" },
      { status: 401 }
    );
  }
  const token = jwt.sign(user, secret, { expiresIn: tokenExpires });
  const response = NextResponse.json({
    message: "token createt successfully!",
    token: token,
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    },
    expires: tokenExpires,
  });
  response.cookies.set("token", token, {
    httpOnly: true, // Sicherstellen, dass der Cookie nicht über JavaScript zugreifbar ist
    secure: process.env.NODE_ENV === "production", // Nur über HTTPS in Produktion
    path: "/", // Der Cookie gilt für die gesamte Seite
    maxAge: 3600, // Ablaufzeit in Sekunden (hier: 1 Stunde)
  });
  return response;
}
