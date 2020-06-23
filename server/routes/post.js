const express = require("express");
const router = express.Router();
const Mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");
const Post = require("../models/post");

/**
 *  Get feed
 */
router.get("/", (req, res) => {
  Post.find()
    .populate("author", "_id name")
    .then((posts) => {
      res.status(200).json({
        posts,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: "Error loading feed!",
      });
    });
});

/**
 * route for posting a post onto your feed
 */
router.post("/post", requireAuth, (req, res) => {
  const { caption, image } = req.body;
  if (!image) {
    return res.status(422).json({ error: "Please add a photo!" });
  }
  req.user.password = undefined;
  const post = new Post({
    caption: caption,
    image: image,
    author: req.user,
  });
  post
    .save()
    .then((result) => {
      res.status(200).json({
        post: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: "Failed to post!",
      });
    });
});

/**
 * Get user profile
 */
router.get("/profile", requireAuth, (req, res) => {
  Post.find({ author: req.user._id })
    .populate("author", "_id name")
    .then((userPosts) => {
      res.status(200).json({
        userPosts,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: "Error getting profile!",
      });
    });
});
module.exports = router;
