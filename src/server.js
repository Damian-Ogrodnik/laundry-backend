const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/user", require("./routes/user"));

module.exports = app;
