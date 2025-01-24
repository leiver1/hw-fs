import { NextResponse, userAgent } from "next/server";
import { prisma } from "../../../../prisma/prismaClient";
import { isEmailValid, isPassowrdValid } from "@/utils/validations";
import usePasswordValidation from "@/hooks/usePasswordValidation";
import bcrypt from "bcrypt";

// create new usesr
export async function POST(req: Request) {
  const user = await req.json();
  const existUser = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });
  if (!isEmailValid(user.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email!" },
      { status: 500 }
    );
  }
  if (!user.password || !isPassowrdValid(user.password)) {
    return NextResponse.json(
      { message: "Please enter a valid password!" },
      { status: 500 }
    );
  }
  if (!existUser) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const prismaUser = await prisma.user.create({
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(prismaUser, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 500 }
    );
  }
}
// export async function GET() {
//   const authUser = JSON.parse(localStorage.getItem("user"));
//   const user = await prisma.user.findUnique({
//     where: {
//       email: authUser.email,
//     },
//   });
//   return NextResponse.json(
//     { message: "The full user", data: user },
//     { status: 200 }
//   );
// }
