async function userProfile(req, res, next) {
  try {
    res.status(201).send("Profile");
  } catch (err) {
    res.status(500).json({ msg: err.message });
    next(err);
  }
}

module.exports = userProfile;
