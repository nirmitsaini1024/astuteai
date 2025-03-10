import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest): Promise<NextResponse> {  
  try {
    const { content, platforms, number } = await req.json();

    if (!content || !platforms || !number) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pythonScript = path.join(process.cwd(), "scripts", "generate_hashtags.py");

    if (!fs.existsSync(pythonScript)) {
      return NextResponse.json({ error: "Python script not found" }, { status: 500 });
    }

    return new Promise((resolve) => {
      const process = spawn("python", [pythonScript, content, platforms.join(","), number.toString()]);

      let result = "";
      process.stdout.on("data", (data) => {
        result += data.toString();
      });

      process.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
      });

      process.on("close", (code) => {
        if (code === 0) {
          try {
            const parsedResult = JSON.parse(result);
            resolve(NextResponse.json(parsedResult, { status: 200 }));
          } catch (error) {
            resolve(NextResponse.json({ error: "Invalid JSON response from Python script" }, { status: 500 }));
          }
        } else {
          resolve(NextResponse.json({ error: "Python script execution failed" }, { status: 500 }));
        }
      });
    }) as Promise<NextResponse>; // Ensure the return type is correct
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
