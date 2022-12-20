const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roleModel = new Schema(
  {
    role: String,
    roleValue: Number,
  },
  { collection: "role" }
);
const role = new mongoose.model("role", roleModel);
role.create(
  {
    role: "Admin",
    roleValue: 3,
  },
  {
    role: "client",
    roleValue: 0,
  },
  {
    role: "LeaderGroup",
    roleValue: 1,
  }
);
module.exports = role;
