const User = require("../../modals/User");
const bcrypt = require("bcryptjs");

async function userChange(req, res, next) {
  try {
    if (req.body.password === req.body.newPassword) {
      return res
        .status(400)
        .json({ msg: "New password is the same as old one" });
    }

    let user = await User.findById(req.user);
    const compared = await bcrypt.compare(req.body.password, user.password);

    if (compared) {
      user.password = req.body.newPassword;
      await user.save();
      res.status(200).json({ msg: "User password changed" });
    } else {
      res.status(400).json({ msg: "Wrong password" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = userChange;
