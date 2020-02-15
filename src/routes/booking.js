const express = require("express");
const router = express.Router();

const bookingControllers = require("../controllers/booking");

const auth = require("../middleware/auth");

// router.post("/create", userControllers.userCreate);
// router.post("/login", validate, userControllers.userLogin);

router.get("/", auth, bookingControllers.getDate);
// router.get("/", userControllers.getUsers);
// router.get("/profile", auth, userControllers.userProfile);

// router.delete("/", auth, userControllers.userDelete);

module.exports = router;
