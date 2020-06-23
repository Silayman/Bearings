const jwt = require("jsonwebtoken");
const { JWT_TOKEN_SECRET } = require("../keys");
const Mongoose = require("mongoose");
const user = require("../models/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      error: "You must be logged in!",
    });
  }
  const bearer_token = authorization.replace("Bearer ", ""); //parse bearer token to retreive just the token
  jwt.verify(bearer_token, JWT_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({
        error: "You must be logged in!",
      });
    }
    const { id } = payload;
    user.findById(id).then((existingUserData) => {
      req.user = existingUserData;
      next();
    });
  });
};
