const User = require("../../modals/User");

async function getUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(201).json({ users });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUsers;
