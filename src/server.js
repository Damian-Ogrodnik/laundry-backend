const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/user", require("./routes/user"));
app.use("/booking", require("./routes/booking"));
app.use("/admin", require("./routes/admin"));

module.exports = app;
