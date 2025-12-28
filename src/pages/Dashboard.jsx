import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";


export default function Dashboard(){
  const [mail, setMail] = useState("")
  const [Pass, setPass] = useState("")
  const navigate = useNavigate()
  const prvider = new GoogleAuthProvider()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, mail, Pass)
      navigate('/lisabot')
    }catch(err){
      alert(err.message)
    }
  }
  async function handleGoogle(){
    try{
      await signInWithPopup(auth, prvider)
      navigate('/lisabot')
    }catch(err){
      alert(err.message)
    }
  }


  return(
    <>
    <h1 className="reg-heading">Register Yourself to use LisaBot </h1>
      <div className="reg">
        <form onSubmit={handleSubmit}>
          <div className="mail">

          <label htmlFor="mail">Enter your email</label>
          <input type="email" onChange={(e)=>setMail(e.target.value)} value={mail} required />
          </div>
          <div className="pass">
            <label htmlFor="pass">Enter Password</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} value={Pass} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="devider">
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className="google">
        <button onClick={handleGoogle}>Continue with Google</button>
      </div>
    </>
  )
}