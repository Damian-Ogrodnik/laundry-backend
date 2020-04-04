const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

const adminAuth = require("../middleware/adminAuth");

router.post("/book", adminAuth, adminControllers.bookSlot);

router.delete("/delete/:id", adminAuth, adminControllers.deleteSlot);

module.exports = router;
