const express = require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN_SECRET } = require("../keys");

/*
 * Sign in page
 */
router.post("/accounts/signin", (req, res) => {
  const { email, password } = req.body;
  user
    .findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        bcrypt
          .compare(password, existingUser.password)
          .then((passwordMatch) => {
            if (passwordMatch) {
              const token = jwt.sign(
                {
                  id: existingUser._id,
                },
                JWT_TOKEN_SECRET
              );
              const { _id, name, email } = existingUser;
              res.status(200).json({
                success: "Successfully Signed In!",
                token: token,
                user: {
                  _id,
                  name,
                  email,
                },
              });
            } else {
              return res.status(422).json({
                error: "Invalid Email or Password!",
              });
            }
          })
          .catch((err) => {
            return res.status(400).json({
              error: "Error signing in!",
            });
          });
      } else {
        res.status(422).json({
          error: "Invalid Email or Password!",
        });
      }
    })
    .catch((err) => {
      res.status(422).json({
        error: "Invalid Email or Password!",
      });
    });
});

/*
 * Sign up post page
 */
router.post("/accounts/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please fill all the fields!" });
  }
  user
    .findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).json({
          error: "User already exists with that E-Mail! Please login!",
        });
      }
      const newUser = new user({
        name,
        email,
        password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(newUser.password);
            return res.status(400).json({
              error: "Error signing up!",
            });
          }
          newUser.password = hash;
          newUser
            .save()
            .then(() =>
              res.status(200).json({
                success: "Successfully Signed Up!",
              })
            )
            .catch((err) =>
              res.status(400).json({
                error: err,
              })
            );
        });
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Error signing up!",
      });
    });
});

module.exports = router;
