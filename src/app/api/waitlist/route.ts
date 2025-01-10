import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email is already in the waitlist" }, { status: 400 });
    }

    await prisma.user.create({
      data: {
        name,
        email,
        status: "Active", 
      },
    });

    return NextResponse.json({ message: "Successfully added to the waitlist!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding user to waitlist:", error);
    return NextResponse.json({ error: "Internal Server Error" },{ status: 500 }

    );
  }
}
