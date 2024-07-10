const User = require('../model/user.model')

exports.user_list = (req, res) => {
  res.send("Hi");
};

exports.add_user = (req, res) => {
    // console.log(req.body);
  res.json({ Requeste: req.body });
};
