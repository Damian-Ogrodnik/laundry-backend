const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const slotSchema = new mongooose.Schema({
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
  },
  date: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  }
});

module.exports = Slot = mongooose.model("slot", slotSchema);
