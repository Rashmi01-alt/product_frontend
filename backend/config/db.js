const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DB Connection Failed`);
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
