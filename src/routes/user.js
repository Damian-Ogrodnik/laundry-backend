const express = require("express");
const router = express.Router();

const validation = require("../middleware/validate");
const userControllers = require("../controllers/user");

const auth = require("../middleware/auth");

router.post("/create", userControllers.createAccount);
router.post("/login", validation, userControllers.login);

router.get("/", userControllers.getUsers);
router.get("/profile", auth, userControllers.profile);

module.exports = router;
