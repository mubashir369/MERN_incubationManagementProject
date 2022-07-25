const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Slot = new mongoose.Schema(
  {
    sec: { type: String },
    slots: [
      {
        id: { type: String },
        name: { type: String },
      },
    ],
  },
  {
    collection: "bookingSlots",
  }
);

const model = mongoose.model("slot", Slot);

module.exports = model;
