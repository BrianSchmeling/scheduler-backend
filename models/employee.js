const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  id: String,
});

const Schedule = mongoose.model("ScheduleSchema", ScheduleSchema);

module.exports = Schedule;
