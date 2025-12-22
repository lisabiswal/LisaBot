// import React from 'react'

function RightSide() {
  return (
    <div className="right-cont">
      <div className="chat-convo">

        <User/>
      </div>
      <div className="send-msg">

        <input type="text" /><span className="send"><i className="fas fa-paper-plane"></i></span>
      </div>
    </div>
  )
}
function User(){
  return(
    <>
      <h1>jj</h1>
    </>
  )
}

export default RightSide