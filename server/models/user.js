const Mongoose = require("mongoose");

/*
 * User Schema
 */
const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = Mongoose.model("User", userSchema); //user
module.exports = user; //export user
