const Schedule = require("../models/schedule");

module.exports = {
  index: (req, res) => {
    Schedule.find().then((Sched) => {
      res.json(Sched);
    });
  },
  show: (req, res) => {
    Schedule.findById(req.params.id).then((Sched) => {
      res.json(Sched);
    });
  },
  create: (req, res) => {
    Schedule.create(req.body).then((Sched) => {
      res.json(Sched);
    });
  },
  edit: (req, res) => {
    Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (Sched) => {
        res.json(Sched);
      }
    );
  },
  delete: (req, res) => {
    Schedule.findByIdAndDelete(req.params.id).then((Sched) => {
      res.json(Sched);
    });
  },
};
