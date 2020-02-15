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
        type: Number
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ]
});

module.exports = User = mongooose.model("booking", bookingSchema);
