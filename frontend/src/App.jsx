import { useState } from "react";
import Chatpage from "./components/Pages/Chats/Chatpage";
import Auth from "./components/Pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./components/Pages/NotFound404/NotFound404";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth></Auth>}></Route>
        <Route path="/chats" element={<Chatpage></Chatpage>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
