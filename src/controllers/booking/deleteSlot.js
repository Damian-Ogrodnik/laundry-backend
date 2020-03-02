const Booking = require("../../modals/Booking");
const User = require("../../modals/User");

async function deleteSlot(req, res, next) {
  try {
    let date = await Booking.findOne({ date: req.body.date });
    let user = await User.findById(req.user);

    if (!user || !date) {
      return res.status(200).json({ msg: "Did not found any bookings " });
    }

    let newUserBookings = [];
    await user.slots.forEach(bookedSlot => {
      if (bookedSlot.id !== req.body.id) newUserBookings.push(bookedSlot);
    });
    user.slots = newUserBookings;
    await user.save();

    let newDateBookings = [];
    await date.slots.forEach(bookedSlot => {
      if (req.user === String(bookedSlot.user)) {
        return null;
      }
      newDateBookings.push(bookedSlot);
    });
    date.slots = newDateBookings;
    await date.save();

    res.status(200).json({ msg: "Slot deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = deleteSlot;
