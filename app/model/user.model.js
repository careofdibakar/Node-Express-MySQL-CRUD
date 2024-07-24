const sql = require("./db.js");

const User = function (receivedData) {
  this.firstName = receivedData.firstName;
  this.lastName = receivedData.lastName;
  this.phoneNumber = receivedData.phoneNumber;
  this.email = receivedData.email;
  this.status = receivedData.status;
};

User.create = (newUser) => {
  return new Promise((resolve, reject) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
      if (err) {
        console.error("error: ", err);
        reject(err);
        return;
      }

      // resolve({ id: res.insertId, ...newUser });
      resolve({ id: res.insertId });
    });
  });
};

User.fetchAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.error("Error: ", err);
        reject(err);
        return;
      }

      resolve(res);
    });
  });
};

User.fetchSingle = (id) => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM user WHERE user.id =" + id, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        reject(err);
        return;
      }

      resolve(res);
    });
  });
};

User.delete = (id) => {
  return new Promise((resolve, reject) => {
    sql.query("DELETE FROM user WHERE `user`.`id` = " + id, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        reject(err);
        return;
      }

      resolve(res);
    });
  });
};
module.exports = User;
