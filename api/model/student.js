const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  std: { type: String, required: true }
});

module.exports = mongoose.model("Student", Student);
