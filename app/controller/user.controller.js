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

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    status: req.body.status,
  });

  User.create(newUser)
    .then((data) => {
      console.log("User created successfully:", data);
      res.send(data); // Send response with inserted user data
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};
