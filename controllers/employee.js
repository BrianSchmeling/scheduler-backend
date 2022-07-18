const Employee = require("../models/employee.js");

module.exports = {
  index: (req, res) => {
    Employee.find().then((Sched) => {
      res.json(Sched);
    });
  },
  show: (req, res) => {
    Employee.findOne(name: req.params.name).then((Sched) => {
      res.json(Sched);
    });
  },
  create: (req, res) => {
    Employee.create(req.body).then((Sched) => {
      res.json(Sched);
    });
  },
  edit: (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (Sched) => {
        res.json(Sched);
      }
    );
  },
  delete: (req, res) => {
    Employee.findOneAndDelete(name: req.params.name).then((Sched) => {
      res.json(Sched);
    });
  },
};
