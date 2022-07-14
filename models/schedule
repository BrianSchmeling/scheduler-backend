const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  id: String,
  text: String,
  start: String,
  end: String,
  resource: String,
});

const Schedule = mongoose.model("ScheduleSchema", ScheduleSchema);

module.exports = Schedule;
