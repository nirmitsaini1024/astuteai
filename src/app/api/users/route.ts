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
    // Set Cache-Control header to prevent caching at Vercel edge
    response.headers.set("Cache-Control", "no-store, max-age=0, stale-while-revalidate=0");
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const response = NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    // Ensure no caching on error as well
    response.headers.set("Cache-Control", "no-store, max-age=0, stale-while-revalidate=0");
    return response;
  }
}
