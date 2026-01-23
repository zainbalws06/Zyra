const express = require("express");
const app = express();
const chats = require("./data/data");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const dbConnection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/user.model");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

app.use(cors());
app.use(express.json());

app.use("/api/data", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.post("/update", async (req, res) => {
  try {
    await User.findByIdAndUpdate("697368a9a113408547118f98", {
      name: "Zain Baloch",
    });
    res.json({ msg: "updated" });
  } catch {
    res.json({ msg: "failed" });
  }
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
