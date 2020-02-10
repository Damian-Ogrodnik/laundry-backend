async function profile(req, res, next) {
  try {
    res.status(201).send("Profile");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = profile;
