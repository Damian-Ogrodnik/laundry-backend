const Slot = require("../../modals/Slot");

async function getUserBookings(req, res, next) {
  try {
    let slots = await Slot.find({ user: req.query.id });
    if (!slots.length) {
      return res.status(200).json({ msg: "Did not found any bookings " });
    }
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUserBookings;
