const mongooose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(email) {
      if (!isEmail(email)) {
        throw new Error("Expected format: email.");
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongooose.model("user", userSchema);
