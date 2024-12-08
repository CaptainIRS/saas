import OpenAI from "openai";

export async function generateCaptions(prompt: string | undefined) {
  if (!prompt) {
    throw new Error("API key and prompt are required.");
  }

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI,
    dangerouslyAllowBrowser: true 
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `you are caption generator assistant`,
        },
        { role: "user", content: prompt, },
      ],
      model: "gpt-4",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error generating captions:", error);
    throw new Error("Failed to generate captions. Please try again.");
  }
}