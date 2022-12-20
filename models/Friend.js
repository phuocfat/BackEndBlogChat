const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const friendModel = new Schema(
  {
    friends: [{ type: Schema.Types.ObjectId, ref: "account" }],
    roleValue: String,
  },
  { collection: "friend" }
);
const friend = new mongoose.model("friend", friendModel);
module.exports = friend;
