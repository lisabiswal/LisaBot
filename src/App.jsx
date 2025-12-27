import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ChatApp from "./pages/ChatApp";
import Dashboard from "./pages/Dashboard";


export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lisabot" element={<ChatApp />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}