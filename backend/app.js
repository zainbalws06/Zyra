const express = require("express");
const app = express();
const chats = require("./data/data");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const dbConnection = require("./config/db");

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json(chats);
});
app.get("/api/data/:id", (req, res) => {
  let { id } = req.params;
  singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log("server started");
    });
  } catch (err) {
    console.log(`could not start server: ${err}`);
  }
};
startServer();
