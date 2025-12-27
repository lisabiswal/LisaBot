import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

export default function ChatApp() {
  const [mess, setMess] = useState([]);

  return (
    <>
      <div className="chat-bot">

        <LeftSide setMess={setMess} />
        <RightSide mess={mess} setMess={setMess} />
      </div>
    </>
  )
}