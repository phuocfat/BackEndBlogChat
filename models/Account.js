const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountModel = new Schema(
  {
    username: String,
    password: String,
    email: String,
    roleID: { type: String, ref: "role", default: "63a1521f2eb4b66a14c9cbb6" },
    friends: { type: Schema.Types.ObjectId, ref: "friend" },
    blog: [{ type: Schema.Types.ObjectId, ref: "blog" }],
  },
  {
    collection: "account",
  }
);
const account = new mongoose.model("account", accountModel);

module.exports = account;
