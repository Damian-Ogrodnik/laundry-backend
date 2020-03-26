const User = require("../../modals/User");
const jwt = require("jsonwebtoken");

const config = require("../../config/config");

async function userCreate(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    jwt.sign(
      { id: user.id },
      config.SECRETKEY,
      { expiresIn: 360000 },
      (error, token) => {
        if (error) throw error;
        res.status(201).json({ token, id: user.id });
      }
    );
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000) {
      res.status(500).json({ msg: "Name or email has been already taken" });
    } else {
      res.status(500).json({ msg: err.message });
    }
    next();
  }
}

module.exports = userCreate;
