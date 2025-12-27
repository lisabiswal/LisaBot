import { askGPT } from "../gpt";

export default function DummyMessages({ setMess }) {
  const sendDummy = async (text) => {
    if (!text.trim()) return;

    // Add user message
    setMess(prev => [...prev, { role: "user", text }]);


    // Ask Gemini
    const reply = await askGPT(text);

    // Remove the typing placeholder and add actual reply
    setMess(prev => {
      // remove last typing message if exists
      const newMess = prev.filter(m => m.text !== "LisaBot is typing...");
      return [...newMess, { role: "bot", text: reply }];
    });
  };

  return (
    <div className="dummy-msg">
      <p onClick={() => sendDummy("Hi how are you?")}>
        Hi how are you? <i className="fas fa-share"></i>
      </p>
      <p onClick={() => sendDummy("Who is the president of India?")}>
        Who is the president of India? <i className="fas fa-share"></i>
      </p>
    </div>
  );
}
