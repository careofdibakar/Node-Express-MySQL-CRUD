const User = require("../model/user.model");

exports.show = (req, res) => {
  let id = req.query.id ? req.query.id : null;
  if (id) {
    User.fetchSingle(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).send({
          message: err.message || "Internal error",
        });
      });
  } else {
    User.fetchAll(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).send({
          message: err.message || "Internal error",
        });
      });
  }
};

exports.create = (req, res) => {
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

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      Error: "Empty Content",
    });
  }

  let userID = req.query.id ? req.query.id : "";
  let userData = {};
  userData.firstName = req.body.firstName || null;
  userData.lastName = req.body.lastName || null;
  userData.phoneNumber = req.body.phoneNumber || null;
  userData.email = req.body.email || null;
  userData.status = req.body.status || null;

  userData = Object.fromEntries(
    Object.entries(userData).filter(([key, value]) => value !== null)
  );

  User.modify(userID, userData)
    .then((data) => {
      console.log("User updated successfully:", data);
      res.send(data); // Send response with inserted user data
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.delete = (req, res) => {
  let id = req.query.id ? req.query.id : null;
  if (id) {
    User.delete(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).send({
          message: err.message || "Internal error",
        });
      });
  }
};
