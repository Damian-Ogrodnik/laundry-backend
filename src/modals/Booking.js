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
        default: 1
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 2
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 3
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 4
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 5
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 6
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 7
      },
      taken: {
        type: Boolean
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    },
    {
      number: {
        type: Number,
        default: 8
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
