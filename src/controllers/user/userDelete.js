const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const User = require("../../modals/User");

async function userProfile(req, res, next) {
  try {
    //await User.deleteOne({ _id: req.user });
    console.log(req.user);
    res.status(200).json({ msg: "User deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = userProfile;
