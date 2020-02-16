const Booking = require("../../modals/Booking");

async function getDate(req, res, next) {
  try {
    console.log(req.params);
    let booking = await Booking.findOne({ date: req.body.date });

    if (!booking) {
      booking = new Booking(req.params);
      await booking.save();
      return res.status(200).json({ booking });
    }
    res.status(200).json({ booking });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getDate;
