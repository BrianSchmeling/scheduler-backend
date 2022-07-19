const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ClockOutSchema = new Schema({
  name: String,
  time: String,
});

const ClockOut = mongoose.model("ClockOutSchema", ClockOutSchema);

module.exports = ClockOut;
