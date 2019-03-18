const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
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
      //contentType: String
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

module.exports = mongoose.model("User", UserSchema);
