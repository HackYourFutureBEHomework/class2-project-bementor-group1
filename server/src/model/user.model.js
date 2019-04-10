const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    tagLine: {
      type: String,
      required: false
    },
    campus: {
      type: String,
      required: false
    },
    bio: {
      type: String,
      required: false
    },
    interests: {
      type: [String],
      required: false
    },
    skills: {
      type: [Object],
      required: false
    },
    userStatus: {
      type: [String],
      default: false
    }
  },
  {
    timestamps: true
  }
);

usersSchema.index({
  firstName: "text",
  lastName: "text",
  bio: "text",
  interests: "text",
  skills: "text"
});

module.exports = mongoose.model("User", usersSchema);
