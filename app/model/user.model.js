const sql = require("./db.js");

class User {
  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
  }

  static create(newUser) {
    return new Promise((resolve, reject) => {
      sql.query("INSERT INTO tutorials SET ?", newUser, (err, res) => {
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
