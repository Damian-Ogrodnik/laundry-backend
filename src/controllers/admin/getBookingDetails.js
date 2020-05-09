const Slot = require("../../modals/Slot");
const User = require("../../modals/User");

async function getBookingDetails(req, res, next) {
  try {
    let slot = await Slot.findById(req.params.id);
    let user = await User.findById(slot.user);
    if (!slot) {
      return res.status(200).json({ msg: "Did not found this booking " });
    }
    res.status(200).json({ user: user.name });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getBookingDetails;
