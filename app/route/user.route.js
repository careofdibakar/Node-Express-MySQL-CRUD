module.exports = (app) => {
  var router = require("express").Router();

  const userController = require("../controller/UserController.js");
  router.get("/getUser", userController.user_list);
  router.post("/addUser", userController.add_user);

  app.use("/", router);
};
