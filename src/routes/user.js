const express = require("express");
const router = express.Router();

const validation = require("../middleware/validate");
const userControllers = require("../controllers/user");

router.post("/create", userControllers.createAccount);

router.post("/login", validation, userControllers.login);

router.get("/", userControllers.getUsers);

module.exports = router;
