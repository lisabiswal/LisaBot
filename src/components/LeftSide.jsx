import DummyMessages from "./DummyMess"
import { auth } from "../firebase"
function LeftSide({setMess}) {
  const user = auth.currentUser
  
  return (
    <div className="left-cont">
{/* left upper part */}
<div className="pad">
      <div className="upper">
        {/* logo */}
        <div className="logo-upper">
        <img src="lisa-logo.png" width={75} height={75} alt="lisa logo" /><span>LisaBot</span>
        </div>
        {/* new chat */}
        <div className="newChat" onClick={() => setKey(prev => prev + 1)}>
          <p><i className="fas fa-plus"></i> New chat</p>
        </div>
        {/* dummy messages */}
        <DummyMessages setMess={setMess}/>
      </div>
{/* footer part */}
      <div className="footer">
        <div className="user">
          <p>{user?.email || "user"} <i className="fas fa-user-astronaut"></i></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LeftSide