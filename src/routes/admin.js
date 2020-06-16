const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

const adminAuth = require("../middleware/adminAuth");

router.get("/booking/:id", adminAuth, adminControllers.getBookingDetails);
router.get("/user", adminAuth, adminControllers.getUser);
router.get("/users", adminAuth, adminControllers.getUsers);
router.get("/user-bookings", adminAuth, adminControllers.getUserBookings);

router.post("/book", adminAuth, adminControllers.bookSlot);
router.post("/user-block", adminAuth, adminControllers.blockUser);
router.post("/user-password", adminAuth, adminControllers.changeUserPassword);

router.delete("/delete/:id", adminAuth, adminControllers.deleteSlot);

module.exports = router;
