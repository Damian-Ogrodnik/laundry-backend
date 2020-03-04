const Slot = require("../../modals/Slot");

async function deleteSlot(req, res, next) {
  try {
    await Slot.deleteOne({ _id: req.params.id });
    return res.status(200).json({ msg: "Slot deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = deleteSlot;
