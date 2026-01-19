const express = require("express");
const app = express();
const chats = require("./data/data");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/api/data", (req, res) => {
  res.json(chats);
});
app.get("/api/data/:id", (req, res) => {
  let { id } = req.params;
  singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});
app.listen(PORT, () => {
  console.log("Listening");
});
