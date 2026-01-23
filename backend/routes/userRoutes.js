const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/userControllers");

router.post("/signup", userControllers.registerUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
