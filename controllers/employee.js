const Employee = require("../models/employee");

module.exports = {
  index: (req, res) => {
    Employee.find().then((Sched) => {
      res.json(Sched);
    });
  },
  show: (req, res) => {
    Employee.findById(req.params.id).then((Sched) => {
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
    Employee.findByIdAndDelete(req.params.id).then((Sched) => {
      res.json(Sched);
    });
  },
};
