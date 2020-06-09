const User = require("../../modals/User");

async function getUser(req, res, next) {
  try {
    let user = await User.findById(req.body.id);
    if (!user) {
      return res.status(200).json({ msg: "Did not found user " });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUser;
