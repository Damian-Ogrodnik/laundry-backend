async function validate(req, res, next) {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      res.status(400).json({ msg: "You have to put name and password" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = validate;
