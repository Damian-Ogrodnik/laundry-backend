const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use("/", (req, res) => {
  res.send("Hello");
});

module.exports = app;
