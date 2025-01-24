import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prismaClient";

export async function GET() {
  const imges = await prisma.image.findMany();

  return NextResponse.json(
    { message: "Successfuly got the images", data: imges },
    { status: 200 }
  );
}
