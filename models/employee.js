const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  id: String,
});

const Employee = mongoose.model("EmployeeSchema", EmployeeSchema);

module.exports = Employee;
