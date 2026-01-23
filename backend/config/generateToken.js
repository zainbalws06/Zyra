const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id) => {
  let token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "30d" });
  return token;
};
module.exports = generateToken;
