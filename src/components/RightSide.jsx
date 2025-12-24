// import React from 'react'

function RightSide() {
  return (
    <div className="right-cont">
      <div className="chat-convo">

        <User/>
        <Bot/>
        <User/>
        <Bot/>
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
        <User/>
        <Bot/> 
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
      <div className="user-box">
        <div className="user-icon"><i className="fas fa-user-astronaut"></i></div>
        <div className="user-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nemo aspernatur accusantium ducimus sint laborum doloribus esse! Id sed eveniet ipsum molestiae, sit, nam mollitia provident temporibus voluptates nemo odio?</p>
        </div>
      </div>
    </>
  )
}
function Bot(){
  return(
    <>
      <div className="user-box">
        <div className="bot-icon"><img src="lisa-logo.png" width={50} height={50} alt="" /></div>
        <div className="bot-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nemo aspernatur accusantium ducimus sint laborum doloribus esse! Id sed eveniet ipsum molestiae, sit, nam mollitia provident temporibus voluptates nemo odio?</p>
        </div>
      </div>
    </>
  )
}

export default RightSide