import "dotenv/config";
import http from "http";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Load API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const server = http.createServer(async (req, res) => {

  // ✅ CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // ✅ API route
  if (req.method === "POST" && req.url === "/ask") {
    let body = "";

    req.on("data", chunk => body += chunk);
    req.on("end", async () => {
      try {
        const { message } = JSON.parse(body);

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

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ text: result.response.text() }));

      } catch (err) {
        console.error("Server error:", err); // logs the real error

        // Always return valid JSON
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ text: "Oops! Something went wrong 😢" }));
      }

    });

  } else {
    res.writeHead(404);
    res.end();
  }
});

// ✅ START SERVER
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");

});
