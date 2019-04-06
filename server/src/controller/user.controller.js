const User = require("../model/user.model");

exports.findAll = (req, res) => {
  //console.log("req", req);
  // console.log("cookies", req.cookies);
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.find = (req, res) => {
  User.findOne({
    _id: req.params.id
  })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const user = new User(req.body);
  user.save().then(user => {
    res.json(user);
  });
};

exports.delete = (req, res) => {
  User.deleteOne({
    _id: req.params.id
  }).then(() => {
    res.json({ massage: "The User has been deleted successfully" });
  });
};

exports.update = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      interests: req.body.interests,
      tagLine: req.body.tagLine,
      skills: req.body.skills
    }
  ).then(() => {
    res.json({ massage: `user has been updated` });
  });
};

exports.search = (req, res) => {
  const query = req.query.text;
  User.find({ $text: { $search: query } })
    .then(mentors => {
      res.send(mentors);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};
// for login....
