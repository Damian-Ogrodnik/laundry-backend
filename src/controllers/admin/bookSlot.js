const Slot = require("../../modals/Slot");
const User = require("../../modals/User");

async function bookSlot(req, res, next) {
  try {
    let user = await User.findOne({ name: req.body.name });
    let slot = await Slot.find({ date: req.body.date });
    let bookingAvaiable = true;

    if (!user) return res.status(400).json({ msg: "Invalid user name" });

    let slotData = {
      number: req.body.number,
      taken: true,
      user: user.id,
      date: req.body.date,
      hours: req.body.hours
    };

    slot.forEach(slot => {
      if (slot.number === req.body.number) {
        bookingAvaiable = false;
        return res.status(400).json({ msg: "Slot is taken" });
      }
    });

    if (bookingAvaiable) {
      const slot = new Slot(slotData);
      await slot.save();
      return res.status(200).json({ slot });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

module.exports = bookSlot;
