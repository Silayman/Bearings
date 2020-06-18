const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const Post = require('../models/post');

/**
 *  Get feed
 */
router.get('/', (req,res)=>{
    Post.find()
        .populate("author","_id name")
        .then(posts=>{
            res.json({
                posts
            })
        })
        .catch(err=>{
            res.status(400).json({
                error: "Error loading feed!"
            })
        })
})


/**
 * route for posting a post onto your feed
 */
router.post('/post',requireAuth, (req,res)=>{
    const {caption, image} = req.body;
    req.user.password = undefined;
    const post = new Post({
        caption: caption,
        image: image,
        author: req.user
    })
    post.save()
        .then(result=>{
            res.json({
                post: result
            })
        })
        .catch(err=>{
            res.status(400).json({
                error: "Failed to post!"
            })
        })
})


module.exports = router;