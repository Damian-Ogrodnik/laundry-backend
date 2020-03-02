const express = require("express");
const router = express.Router();

const bookingControllers = require("../controllers/booking");

const auth = require("../middleware/auth");

router.get("/user-bookings", auth, bookingControllers.getUserBookings);
router.get("/:date", auth, bookingControllers.getDate);

router.post("/", auth, bookingControllers.bookSlot);
router.delete("/", auth, bookingControllers.deleteSlot);

module.exports = router;
