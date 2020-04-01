const jwt = require("jsonwebtoken");
const config = require("../config/config");

const User = require("../modals/User");

module.exports = async function(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorizaton denied" });
  }
  try {
    const decoded = jwt.verify(token, config.SECRETKEY);
    let user = await User.findById(decoded.id);
    if (user.name !== "admin") {
      return res.status(401).json({ msg: "Authorization denied" });
    }
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
