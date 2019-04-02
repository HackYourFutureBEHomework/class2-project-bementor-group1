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
    img: {
      type: String
    },
    tagLine: {
      type: String,
      required: true
    },
    campus: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    interests: {
      type: [String],
      required: true
    },
    skills: {
      type: [Object],
      required: true
    },
    mentorStatus: {
      type: Boolean,
      default: false
    },
    menteeStatus: {
      type: Boolean,
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
