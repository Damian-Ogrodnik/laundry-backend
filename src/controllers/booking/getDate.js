const Slot = require("../../modals/Slot");

async function getDate(req, res, next) {
  try {
    let slots = await Slot.find({ date: req.params.date });

    if (!slots) {
      return res.status(200).json([]);
    }
    res.status(200).json({ slots });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getDate;
