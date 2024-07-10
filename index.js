require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

/** */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  /** Here are various method, that we can send as response */
  /** res.send(" Hi! The app is running fine");
    res.json({ message: " Hi! The app is running fine" });
    res.sendStatus();
    res.header();
    res.set();
    res.status();
    res.cookie();
    res.redirect();  
    */
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/** Now we will work on router */
require("./app/route/user.route.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Using PORT: " + PORT);
});
