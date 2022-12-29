const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: String,
    url: String,
    demo: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
