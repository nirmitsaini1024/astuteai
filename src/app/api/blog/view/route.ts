import { NextResponse } from "next/server";
import { Client } from "pg";

const DB_URL = process.env.NEON_DB_CMS!;
if (!DB_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

export async function GET() {
  const client = new Client({
    connectionString: DB_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const result = await client.query("SELECT * FROM blog_post ORDER BY date_created DESC");

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "No blog posts found" }, { status: 404 });
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.end(); // Ensure connection is closed properly
  }
}
