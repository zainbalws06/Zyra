const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const generateToken = require("../config/generateToken");

module.exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
    pic: pic,
  });
  if (newUser) {
    newToken = generateToken(newUser._id);

    res.status(201).json({
      name: newUser.name,
      _id: newUser._id,
      email: newUser.email,
      token: newToken,
    });
  } else {
    res.status(400);
    throw new Error("User not created");
  }
});

module.exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const comparePassword = await userExists.comparePassword(password);

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  if (user && comparePassword) {
    res.status(200);
    res.send("User exists");
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});
