const User = require("../model/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

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
// for registor
exports.register = (req, res) => {
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
///////////////////////
//for login
exports.querylogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const incomingcookie = req.cookie;
  console.log("incomingcookie", incomingcookie);

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    if (user.firstName != req.body.firstname) {
      return res
        .status(404)
        .json({ firstnamenotfound: "firstname not matched" });
    }
    if (user.lastName != req.body.lastname) {
      return res.status(404).json({ lastnamenotfound: "lastname not matched" });
    }

    // check password
    bcrypt.compare(password, user.password).then(matchresult => {
      if (matchresult) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        //// Sign token
        jwt.sign(
          payload,
          JWT_SECRET,
          {
            expiresIn: "2 days"
          },
          (err, token) => {
            res.json({
              success: true,
              _id: user._id,
              token: "%$%#&$" + token
            });
            console.log("token", token);

            //console.log(err);
            res.cookie("token", token, {
              maxAge: 1000 * 60 * 10,
              httpOnly: true
            });
            //console.log("res:", res);
            //console.log("res.cookie:", res.cookie);
            //res.cookie("token", "token");
            //console.log("res.cookie:", res.cookie);
            //console.log("token1212", token);
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};
