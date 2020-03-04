const Slot = require("../../modals/Slot");

async function bookSlot(req, res, next) {
  try {
    let bookingAvaiable = true;
    let slot = await Slot.find({ date: req.body.date });

    if (!slot) {
      return res.status(400).json({ msg: "Can not find this date" });
    }

    let slotData = {
      number: req.body.number,
      taken: true,
      user: req.user,
      date: req.body.date,
      hours: req.body.hours
    };

    slot.forEach(slot => {
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
      const slot = new Slot(slotData);
      await slot.save();
      return res.status(200).json({ slot });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: err.message });
  }
}

module.exports = bookSlot;
