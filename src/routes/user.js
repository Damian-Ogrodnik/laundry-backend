const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user");

const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");

router.post("/create", userControllers.userCreate);
router.post("/login", validate, isAdmin, userControllers.userLogin);
router.post("/change-password", auth, userControllers.userChange);

router.get("/", userControllers.getUsers);
router.get("/profile", auth, userControllers.userProfile);

router.delete("/", auth, userControllers.userDelete);

module.exports = router;
