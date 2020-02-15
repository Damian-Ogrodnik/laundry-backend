const Booking = require("../../modals/Booking");

async function getDate(req, res, next) {
  try {
    console.log(req.body.date);
    console.log(req.user);
    res.status(201).json("Booking");
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getDate;
