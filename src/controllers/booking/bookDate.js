const Booking = require("../../modals/Booking");
const User = require("../../modals/User");

async function bookDate(req, res, next) {
  try {
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
      if (slot.number === req.body.number) {
        return res.status(400).json({ msg: "Slot is taken" });
      }
    });

    await booking.slots.push(slot);
    await booking.save();
    if (!user.slots) {
      user.slots = [];
    }
    await user.slots.push(slot);
    await user.save();
    return res.status(200).json({ slot });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = bookDate;
