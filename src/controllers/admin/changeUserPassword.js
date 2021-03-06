const User = require("../../modals/User");
const bcrypt = require("bcryptjs");

async function changeUserPassword(req, res, next) {
  try {
    let user = await User.findById(req.body.id);
    user.password = req.body.newPassword;
    await user.save();
    res.status(200).json({ msg: "User password changed" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = changeUserPassword;
