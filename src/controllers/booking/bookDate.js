const Booking = require("../../modals/Booking");

async function bookDate(req, res, next) {
  try {
    let booking = await Booking.findOne({ date: req.body.date });

    if (!booking) {
      return res.status(400).json({ msg: "Can not find this date" });
    }
    let slot = {
      number: req.body.number,
      taken: true,
      user: req.user
    };

    booking.slots.forEach(slot => {
      if (slot.number === req.body.number) {
        return res.status(400).json({ msg: "Slot is taken" });
      }
    });

    await booking.slots.push(slot);
    await booking.save();
    return res.status(200).json({ slot });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = bookDate;
