const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = function(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorizaton denied" });
  }
  try {
    const decoded = jwt.verify(token, config.SECRETKEY);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
