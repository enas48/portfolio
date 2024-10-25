const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bio: String,
    aboutme: String,
    yearsOfExp:
    {type:String,
      default:new Date().getFullYear() - 2021
    },
    frontendExperiences: [
        {
            text: {
              type: String,
              required: false,
              default: "",
            },
            id: {
              type: String,
              required: false,
              default: "",
            }
      }
      ],
      backendExperiences: [
        {
            text: {
              type: String,
              required: false,
              default: "",
            },
            id: {
              type: String,
              required: false,
              default: "",
            }
      }
      ],
      otherExperiences: [
        {
            text: {
              type: String,
              required: false,
              default: "",
            },
            id: {
              type: String,
              required: false,
              default: "",
            }
      }
      ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
