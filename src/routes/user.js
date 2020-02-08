const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user");

router.post("/create", userControllers.createAccount);

router.get("/", userControllers.getUsers);

module.exports = router;
