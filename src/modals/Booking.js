const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const bookingSchema = new mongooose.Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },
  slots: [
    {
      number: {
        type: Number,
        required: true
      },
      taken: {
        type: Boolean,
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
      }
    }
  ]
});

module.exports = User = mongooose.model("booking", bookingSchema);
