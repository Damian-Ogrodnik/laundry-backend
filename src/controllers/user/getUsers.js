const User = require("../../modals/User");

async function getUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUsers;
