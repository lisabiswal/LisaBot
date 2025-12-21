import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function App(){
  return(
    <>
    <div className="chat-bot">

        <LeftSide/>
        <RightSide/>
    </div>
    </>
  )
}