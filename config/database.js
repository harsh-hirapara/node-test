const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    if (connection) console.log("Database successfully connected");
  } catch (err) {
    console.log("Error while connecting database", err.message);
  }
};
