import { GoogleGenerativeAI } from "@google/generative-ai";

// Directly use key here
const genAI = new GoogleGenerativeAI("AIzaSyCYgEy45QTeF0BBtcpmmTBS8xsCNBCle9g");

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGPT(message) {
  const result = await model.generateContent(
    `You are LisaBot. Reply in simple words. you are a friendly chatbot. when user says hi do introduce yourself with your name that is Lisa\nUser: ${message}`
  );
  return result.response.text();
}
