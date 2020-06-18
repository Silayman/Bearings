const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const Post = require('../models/post');


router.post('/post',requireAuth, (req,res)=>{
    const {caption, image} = req.body;
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