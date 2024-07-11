const User = require("../model/user.model");

exports.user_list = (req, res) => {
  res.send("Hi");
};

exports.add_user = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      Error: "Empty Content",
    });
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    status: req.body.status,
  });

  // Save Tutorial in the database
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    } else {
      console.log(11111111111111);
      console.log(data);
      res.send(data);
    }
  });
};
