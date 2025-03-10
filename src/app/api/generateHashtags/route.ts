import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";

config();

const apiKey = process.env.GENAI_API_KEY;
if (!apiKey) {
  throw new Error("Missing API Key");
}

const genAI = new GoogleGenerativeAI(apiKey);

const platformGuidance: Record<string, string> = {
  linkedin: "professional, industry-relevant, career-focused, and business-appropriate",
  instagram: "trendy, visual, descriptive, and engaging for a wider audience",
  twitter: "concise, trending, conversational, and topic-relevant",
  facebook: "broad appeal, community-focused, and content-relevant",
};

async function generateHashtags(content: string, platform: string, number: number): Promise<string[]> {
  const guidance = platformGuidance[platform.toLowerCase()] || "relevant and engaging";
  const prompt = `
    Generate ${number} hashtags for a ${platform} post with the following content:
    "${content}"
    Make the hashtags ${guidance}. Format each hashtag with the # symbol.
    Return only the hashtags separated by spaces.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const response = await model.generateContent(prompt);
    const hashtagsText = response.response.text().trim();
    const hashtagsList = hashtagsText.split(" ").filter((tag:string) => tag.startsWith("#"));
    return hashtagsList.slice(0, number);
  } catch (error) {
    console.error("Error generating hashtags:", error);
    return [];
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { content, platforms, number } = await req.json();
    if (!content || !platforms || !number) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const hashtagsByPlatform: Record<string, string[]> = {};
    for (const platform of platforms) {
      if (platformGuidance[platform.toLowerCase()]) {
        hashtagsByPlatform[platform] = await generateHashtags(content, platform, number);
      }
    }

    return NextResponse.json({
      post_content: content,
      hashtags: hashtagsByPlatform,
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
