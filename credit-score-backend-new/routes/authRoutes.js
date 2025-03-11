const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, getMe); // ✅ New route to fetch user details

module.exports = router;
