import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "../../../../prisma/prismaClient";

export async function POST(req: Request) {
  const user = await req.json();

  return NextResponse.json({ user }, { status: 200 });
}
