import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        dateTaken: true,
        status: true,
      },
    });

    const response = NextResponse.json(users);
    response.headers.set("Cache-Control", "no-store"); // Disable caching
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const response = NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    response.headers.set("Cache-Control", "no-store"); // Ensure no caching on error as well
    return response;
  }
}
