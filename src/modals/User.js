const mongooose = require("mongoose");
const Schema = mongooose.Schema;
const { genSalt, hash } = require("bcryptjs");
const { isEmail } = require("validator");

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(email) {
      if (!isEmail(email)) {
        throw new Error("Expected format: email.");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  slots: [{ type: Schema.Types.ObjectId, ref: "slot" }],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const saltRounds = 8;
    const salt = await genSalt(saltRounds);
    user.password = await hash(user.password, salt);
  }
  next();
});

module.exports = User = mongooose.model("user", userSchema);
