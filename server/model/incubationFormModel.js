const mongoose = require("mongoose");
const Form = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    status: { type: String, required: true },
    slot: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    lMark: { type: String, required: true },
    Cname: { type: String, required: true },
    teamBg: { type: String, required: true },
    products: { type: String, required: true },
    solve: { type: String, required: true },
    solution: { type: String, required: true },
    proposition: { type: String, required: true },
    revenue: { type: String, required: true },
    busProp: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    collection: "formData",
  }
);
const model = mongoose.model("form", Form);
module.exports = model;
