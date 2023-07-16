const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  recurrence: {
    type: String,
    required: true,
  },
});

exports.Event = mongoose.model("events", eventSchema);
