const express = require('express');
const router = express.Router();
let user = require('../models/user')

//default get page
router.get('/', (req,res)=>{
    res.send("Login!")
})

//sign up page post
router.post('/accounts/signup', (req,res)=>{
    const {name, email, password} = req.body;
    const newUser = new user({name,email,password});
    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;