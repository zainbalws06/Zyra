const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to Database");
  } catch (err) {
    console.log(`could not connect to Database: ${err}`);
  }
};

module.exports = dbConnection;
