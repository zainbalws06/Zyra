import { useState } from "react";
import Chatpage from "./components/Pages/Chats/Chatpage";
import Auth from "./components/Pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/Pages/notFound/notFound";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth></Auth>}></Route>
        <Route path="/chats" element={<Chatpage></Chatpage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
