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

    // Create the response and set headers to prevent caching
    const response = NextResponse.json(users, {
      headers: {
        "Cache-Control": "no-store, max-age=0, must-revalidate",
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching users:", error);

    // Create the error response and set headers to prevent caching
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  }
}
