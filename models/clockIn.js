const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
  name: String,
  time: String,
});

const ClockIn = mongoose.model("ClockInSchema", ClockInSchema);

module.exports = ClockIn;
