// import React from 'react'

import { useEffect, useRef, useState } from "react"
import { askGPT } from "../gpt"

function RightSide() {

  const [inp, setInp] = useState("")
  const [mess, setMess] = useState([])
  const sendMess = async () => {
    if (!inp.trim()) return
    setMess(prev => [...prev, { role: "user", text: inp }])
    const userInp = inp;
    setInp(" ")
    const reply = await askGPT(userInp)
    setMess(prev => [...prev, { role: "bot", text: reply }]);
  }
  const chatEnd = useRef(null)
  useEffect(()=>{
    chatEnd.current?.scrollIntoView({behavior: "smooth"})
  },[mess])



  return (
    <div className="right-cont">
      <div className="chat-convo">
        {
          mess.map((msg, idx) =>
            msg.role === "user" ? (
              <User key={idx} text={msg.text} />
            ) : (
              <Bot key={idx} text={msg.text} />
            )
          )
        }
        <div ref={chatEnd} />
      </div>
      <div className="send-msg">

        <input type="text" onChange={(e)=>setInp(e.target.value)} value={inp} /><span className="send" onClick={sendMess}><i className="fas fa-paper-plane"></i></span>
      </div>

    </div>
  )
}
function User({text}) {
  return (
    <>
      <div className="user-box">
        <div className="user-icon"><i className="fas fa-user-astronaut"></i></div>
        <div className="user-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}
function Bot({text}) {
  return (
    <>
      <div className="user-box">
        <div className="bot-icon"><img src="lisa-logo.png" width={50} height={50} alt="" /></div>
        <div className="bot-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default RightSide