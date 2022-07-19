const ClockOut = require("../models/clockOut");

module.exports = {
  index: (req, res) => {
    ClockOut.find().then((clock) => {
      res.json(clock);
    });
  },
  show: (req, res) => {
    ClockOut.findOne({ name: req.params.name }).then((clock) => {
      res.json(clock);
    });
  },
  create: (req, res) => {
    ClockOut.create(req.body).then((clock) => {
      res.json(clock);
    });
  },
  edit: (req, res) => {
    ClockOut.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    }).then((clock) => {
      res.json(clock);
    });
  },
  delete: (req, res) => {
    ClockOut.findOneAndDelete({ name: req.params.name }).then((clock) => {
      res.json(clock);
    });
  },
};
