const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogModel = new Schema(
  {
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "account" },
    express: [
      {
        type: String,
        accountId: { type: Schema.Types.ObjectId, ref: "account" },
      },
    ],
    comments: [
      {
        accountId: { type: Schema.Types.ObjectId, ref: "account" },
        comment: String,
        express: [
          {
            type: String,
            accountId: { type: Schema.Types.ObjectId, ref: "account" },
          },
        ],
      },
    ],
  },
  {
    collection: "blog",
  }
);
const blog = new mongoose.model("blog", blogModel);
module.exports = blog;
