import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGPT(message) {
  const result = await model.generateContent(
    `You are LisaBot.
You are friendly, chill, and helpful.
Use simple words and a positive tone.

When the user says hi,
reply:
"Hey! I’m Lisa 👋 Your friendly chatbot. What can I help you with?"

Keep replies short and easy to understand.


User: ${message}`
  );

  return result.response.text();
}
