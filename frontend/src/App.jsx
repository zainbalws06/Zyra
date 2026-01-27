import { useState } from "react";
import Chatpage from "./components/Pages/Chats/Chatpage";
import Auth from "./components/Pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Auth></Auth>}></Route>
      <Route path="/chats" element={<Chatpage></Chatpage>}></Route>
    </Routes>
  );
}

export default App;
