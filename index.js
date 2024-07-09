/**  */
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  // res.send(" Hi! The app is running fine");
  //   res.json({ message: " Hi! The app is running fine" });
  res.sendFile(path.join(__dirname, "public", "index.html"));
  // res.sendStatus();
  // res.header();
  // res.set();
  // res.status();
  // res.cookie();
  // res.redirect();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Using PORT: " + PORT);
});
