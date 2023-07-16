const express = require("express");
require("dotenv").config();
const { databaseConnection } = require("./config/database");
const { PORT } = require("./config");
const { Event } = require("./models/event.model");
const app = express();

app.use(express.json());

app.get("/event/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const event = await Event.findOne({ _id });

    while (event.startDate < event.endDate) {
      const date = moment(startDate).add(1, "days");
      console.log(date);
    }

    return res.status(200).json({ status: true, data: event });
  } catch (err) {
    console.log("Error while getting event : ", err.message);
    next(err);
  }
});

app.use(function (err, req, res, next) {
  return res.status(err.status).json({ status: false, message: err.message });
});

databaseConnection().then(() => {
  app.listen(PORT, (err) => {
    if (err) console.log("Error while starting server");
    console.log("Server is running on port", PORT);
  });
});
