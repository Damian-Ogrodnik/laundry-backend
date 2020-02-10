const User = require("../../modals/User");

async function userProfile(req, res, next) {
  try {
    let user = await await User.findById(req.user);
    user.password = null;
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = userProfile;
