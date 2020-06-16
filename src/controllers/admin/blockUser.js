const User = require("../../modals/User");

async function blockUser(req, res, next) {
  try {
    let user = await User.findById(req.body.id);
    user.isBlocked = true;
    await user.save();
    if (!user) {
      return res.status(200).json({ msg: "Did not found user " });
    }
    res.status(200).json("User blocked");
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = blockUser;
