const ClockIn = require("../models/clockIn");

module.exports = {
  index: (req, res) => {
    ClockIn.find().then((clock) => {
      res.json(clock);
    });
  },
  show: (req, res) => {
    ClockIn.findOne({ name: req.params.name }).then((clock) => {
      res.json(clock);
    });
  },
  create: (req, res) => {
    ClockIn.create(req.body).then((clock) => {
      res.json(clock);
    });
  },
  edit: (req, res) => {
    ClockIn.findByIdAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    }).then((clock) => {
      res.json(clock);
    });
  },
  delete: (req, res) => {
    ClockIn.findOneAndDelete({ name: req.params.name }).then((clock) => {
      res.json(clock);
    });
  },
};
