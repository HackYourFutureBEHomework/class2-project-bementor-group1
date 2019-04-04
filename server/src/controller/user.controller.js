const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const generateJWT = payload => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2 days" });
};

exports.findAll = (req, res) => {
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

exports.register = (req, res) => {
  //TODO definte all the validations (1.23m)
  const { password } = req.body;
  bcrypt
    .hash(password, 10)
    .then(hash => {
      const user = new User({
        ...req.body,
        password: hash
      });
      return user.save();
    })
    .then(user => {
      res.status(201).send({
        message: "Your account has been created"
      });
    });
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .select("+password")
    .then(user => {
      const storedHash = user.password;
      return bcrypt.compare(req.body.password, storedHash);
    })
    .then(authenticationSuccessful => {
      if (!authenticationSuccessful) {
        return res.status(401).send({
          message: "Incorrect email or password."
        });
      }
      return generateJWT({ _id: foundUser._id });
    })
    .then(token => {
      console.log(token);
    });
};
