const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const ConnectToDB = require("./db/db.js");
const app = express();
const userRoutes = require("./routes/user.routes.js");

ConnectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;
