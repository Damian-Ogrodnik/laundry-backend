const Booking = require("../../modals/Booking");

async function bookDate(req, res, next) {
  try {
    res.status(200).send("Book this date");
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = bookDate;
