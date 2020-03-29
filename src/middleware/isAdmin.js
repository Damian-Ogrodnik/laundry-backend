const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

module.exports = async (req, res, next) => {
  try {
    const { name, password } = req.body;

    if (name === "admin") {
      let admin = await User.findOne({ name });

      if (!admin) return next();

      const compared = await bcrypt.compare(password, admin.password);

      if (!compared) return next();

      jwt.sign(
        { id: admin.id },
        config.SECRETKEY,
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token, id: admin.id, name, admin: true });
        }
      );
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
};
