const express = require("express");
const router = express.Router();

const validation = require("../middleware/validate");
const userControllers = require("../controllers/user");

const auth = require("../middleware/auth");

router.post("/create", userControllers.userCreate);
router.post("/login", validation, userControllers.userLogin);

router.get("/", userControllers.getUsers);
router.get("/profile", auth, userControllers.userProfile);

router.delete("/", auth, userControllers.userDelete);

module.exports = router;
