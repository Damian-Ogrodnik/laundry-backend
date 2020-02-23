const Booking = require("../../modals/Booking");
const User = require("../../modals/User");

async function getUserBookings(req, res, next) {
  try {
    let user = await User.findById(req.user);
    if (!user) {
      return res.status(200).json({ msg: "Did not found any bookings " });
    }
    res.status(200).json(user.slots);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUserBookings;
