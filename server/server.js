const express = require("express"); //import express
const app = express(); //invoke express
const port = 5000; //port to listen on
const Mongoose = require("mongoose"); //import mongoose
const { MongoURL } = require("./keys"); //require mongo atlas connect url

/*
 * Connect to DB
 */
Mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*
 * Successful connection
 */
Mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo Atlas Database!");
});

/*
 * unsuccessful connection
 * log error
 */
Mongoose.connection.on("error", (err) => {
  console.log("Error connecting to Mongo Atlas Database:", err);
});

const user = require("./models/user");
const post = require("./models/post");
app.use(express.json()); //use json to parse incoming requests
app.use(require("./routes/auth")); //use auth route
app.use(require("./routes/post")); //use post route

/*
 * Listen to given port
 */
app.listen(port, () => {
  console.log("Server is running on", port);
});
