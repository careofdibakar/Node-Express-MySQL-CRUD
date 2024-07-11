const sql = require("./db.js");

class User {
  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.status = user.status;
  }

  static create(newUser) {
    return new Promise((resolve, reject) => {
      sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
          console.error("error: ", err);
          reject(err);
          return;
        }

        console.log("user created : ", { id: res.insertId, ...newUser });
        resolve({ id: res.insertId, ...newUser });
      });
    });
  }
}

module.exports = User;
