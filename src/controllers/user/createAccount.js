const User = require("../../modals/User");

async function createAccount(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = createAccount;
