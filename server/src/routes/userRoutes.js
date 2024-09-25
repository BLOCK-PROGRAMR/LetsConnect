// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/userController");
const { login } = require("../controllers/userLogin");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
