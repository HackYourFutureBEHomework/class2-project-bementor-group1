const mongoose = require("mongoose");
const User = require("../src/model/user.model");

require("dotenv").config();

const run = async () => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
  });

  const users = require("./users.json");

  const models = users.map(user => {
    return new User({
      firstName: user.firstName,
      lastName: user.lastName,
      tagLine: user.tagLine,
      campus: user.campus,
      bio: user.bio,
      interests : user.interests,
      skills: user.skills,
      mentorStatus: false,
      menteeStatus: false
    });
  });

  const savePromises = models.map(model => {
    return model.save();
  });

  await Promise.all(savePromises);
  await mongoose.disconnect();
};

run();
