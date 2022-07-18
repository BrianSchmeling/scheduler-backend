const Schedule = require("../models/schedule");
const Employee = require("../models/employee");

Schedule.deleteMany({}).then(() => {
  // console.log("Seeding Schedule");
  Schedule.create([
    {
      id: "1",
      text: "Event 1",
      start: "2022-07-11T00:00:00",
      end: "2022-07-12T00:00:00",
      resource: "1",
    },
    {
      id: "2",
      text: "Event 2",
      start: "2022-07-11T04:00:00",
      end: "2022-07-11T08:00:00",
      resource: "2",
    },
    {
      id: "3",
      text: "Event 3",
      start: "2022-07-11T00:00:00",
      end: "2022-07-11T09:00:00",
      resource: "4",
    },
    {
      id: "4",
      text: "Event 3",
      start: "2022-07-11T00:00:00",
      end: "2022-07-11T14:00:00",
      resource: "5",
    },
  ]).then((sched) => {
    console.log(sched);
    // res.json(sched);
    // process.exit();
  });
});

Employee.deleteMany({}).then(() => {
  Employee.create([
    {
      name: "Brian",
      id: "1",
    },
    {
      name: "Perfect and Beautiful Emma",
      id: "2",
    },
    {
      name: "Someone else",
      id: "3",
    },
    {
      name: "This guy",
      id: "4",
    },
  ]).then((emp) => {
    console.log(emp);
    // res.json(emp);
    // process.exit();
  });
});
