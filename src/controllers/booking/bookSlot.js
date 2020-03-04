const Booking = require("../../modals/Booking");
const User = require("../../modals/User");

async function bookSlot(req, res, next) {
  try {
    let bookingAvaiable = true;
    let booking = await Booking.findOne({ date: req.body.date });
    let user = await User.findById(req.user);

    if (!booking) {
      return res.status(400).json({ msg: "Can not find this date" });
    }

    let slot = {
      number: req.body.number,
      taken: true,
      user: req.user,
      date: req.body.date,
      hours: req.body.hours
    };

    booking.slots.forEach(slot => {
      if (String(slot.user) === req.user) {
        bookingAvaiable = false;
        return res
          .status(400)
          .json({ msg: "You can not book two slots for the one day" });
      }
      if (slot.number === req.body.number) {
        bookingAvaiable = false;
        return res.status(400).json({ msg: "Slot is taken" });
      }
    });

    if (bookingAvaiable) {
      await booking.slots.push(slot);
      await booking.save();
      if (!user.slots) {
        user.slots = [];
      }
      await user.slots.push(slot);
      await user.save();
      return res.status(200).json({ slot });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

module.exports = bookSlot;
