const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

const adminAuth = require("../middleware/adminAuth");

router.get("/booking/:id", adminAuth, adminControllers.getBookingDetails);
router.get("/users", adminAuth, adminControllers.getUsers);

router.post("/book", adminAuth, adminControllers.bookSlot);

router.delete("/delete/:id", adminAuth, adminControllers.deleteSlot);

module.exports = router;
