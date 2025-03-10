import sys
import json
import google.generativeai as genai
import os
from dotenv import load_dotenv

def setup_genai():
    load_dotenv()
    api_key = os.getenv("GENAI_API_KEY")
    if not api_key:
        raise ValueError("Missing API Key")
    genai.configure(api_key=api_key)

def generate_hashtags(content, platform, number=10):
    platform_guidance = {
        "linkedin": "professional, industry-relevant, career-focused, and business-appropriate",
        "instagram": "trendy, visual, descriptive, and engaging for a wider audience",
        "twitter": "concise, trending, conversational, and topic-relevant",
        "facebook": "broad appeal, community-focused, and content-relevant"
    }
    
    platform_lower = platform.lower()
    guidance = platform_guidance.get(platform_lower, "relevant and engaging")
    
    prompt = f"""
    Generate {number} hashtags for a {platform} post with the following content:
    "{content}"
    
    Make the hashtags {guidance}. Format each hashtag with the # symbol.
    Return only the hashtags separated by spaces.
    """
    
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(prompt)
        hashtags_text = response.text.strip()
        hashtags_list = [tag.strip() for tag in hashtags_text.split() if tag.strip().startswith('#')]
        if not hashtags_list:
            words = [f"#{word.strip('#')}" for word in hashtags_text.split() if word.strip()]
            hashtags_list = words[:number]
        
        return hashtags_list[:number] 
    
    except Exception as e:
        return []

def main():
    setup_genai()
    content = sys.argv[1]
    platforms = sys.argv[2].split(",")
    number = int(sys.argv[3])
    
    hashtags_by_platform = {}
    for platform in platforms:
        platform = platform.strip().lower()
        if platform in ["linkedin", "instagram", "twitter", "facebook"]:
            hashtags = generate_hashtags(content, platform, number)
            hashtags_by_platform[platform] = hashtags
    
    output = {
        "post_content": content,
        "hashtags": hashtags_by_platform
    }
    
    print(json.dumps(output, indent=2))

if __name__ == "__main__":
    main()
