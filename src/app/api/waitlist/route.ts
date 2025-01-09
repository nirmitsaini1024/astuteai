import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email } = await req.json();

    // Validate inputs
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email is already in the waitlist" }, { status: 400 });
    }

    // Add the user to the database
    await prisma.user.create({
      data: {
        name,
        email,
        status: "Active", // Ensure this matches the enum value defined in the Prisma schema
      },
    });

    return NextResponse.json({ message: "Successfully added to the waitlist!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding user to waitlist:", error);
    return NextResponse.json({ error: "Internal Server Error" },{ status: 500 }

    );
  }
}
