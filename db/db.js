const mongoose = require("mongoose");

function ConnectToDB() {
  mongoose
    .connect(process.env.MONGO_URI.toString())
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log("Mongo DB Connection Error :: ", err));
}

module.exports = ConnectToDB;
