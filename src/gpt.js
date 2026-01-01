export async function askGPT(message) {
  try {
    const res = await fetch("https://lisabot-chat.onrender.com/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json(); // will always succeed now
    return data.text || "Oops! Something went wrong 😢";

  } catch (err) {
    console.error("Frontend fetch error:", err);
    return "Oops! Something went wrong 😢";
  }
}
