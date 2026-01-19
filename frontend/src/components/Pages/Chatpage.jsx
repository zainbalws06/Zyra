import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Chatpage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    let chats = await axios.get("/api/data");
    console.log(chats.data);
    setChats(chats.data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div>
        {chats.map((c) => (
          <div key={c._id}>{c.chatName}</div>
        ))}
      </div>
    </>
  );
}

export default Chatpage;
