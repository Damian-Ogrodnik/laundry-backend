const express = require("express");
const router = express.Router();

const bookingControllers = require("../controllers/booking");

const auth = require("../middleware/auth");

router.get("/:date", auth, bookingControllers.getDate);

router.post("/", auth, bookingControllers.bookDate);

module.exports = router;
