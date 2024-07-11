const User = require('../model/user.model')

exports.user_list = (req, res) => {
  res.send("Hi");
};

exports.add_user = (req, res) => {
    if(!req.body){
      res.status(400).send({
        "Error": "Empty Content"
      })
    }

    
};
