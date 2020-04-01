const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

const adminAuth = require("../middleware/adminAuth");

router.post("/book", adminAuth, adminControllers.bookSlot);

module.exports = router;
