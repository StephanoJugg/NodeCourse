const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Users middlware");
});

app.use("/", (req, res, next) => {
  console.log("The basic middlware");
});

app.listen(3000);
