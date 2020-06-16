const User = require("../../modals/User");

async function getUsers(req, res, next) {
  try {
    let users = await User.find({
      name: { $regex: req.query.name || "" },
    });
    let filteredUsers = users
      .map(({ name, _id, isBlocked }) => {
        return {
          id: _id,
          name,
          isBlocked,
        };
      })
      .filter(({ name }) => name !== "admin");
    if (!users) {
      return res.status(200).json({ msg: "Did not found any users " });
    }
    res.status(200).json(filteredUsers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = getUsers;
