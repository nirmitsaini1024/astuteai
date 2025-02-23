import { NextResponse } from "next/server";
import { Pool } from "pg";

const DB_URL = process.env.NEON_DB_CMS!;

// 🛠 PostgreSQL Connection Pool
const pool = new Pool({
  connectionString: DB_URL,
});

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id; // URL se id le rahe hain

    // 📝 Query Database
    const result = await pool.query('SELECT * FROM "blog_post" WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // ✅ Response
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
