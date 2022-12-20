const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", true);
const connectDatabase = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!!!");
  })
  .catch((err) => {
    console.log(err.message);
  });
module.exports = connectDatabase;
