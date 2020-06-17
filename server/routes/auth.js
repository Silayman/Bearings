const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
/*
* Default get page
*/
router.get('/', (req,res)=>{
    res.send("Login!")
})

/*
* Sign up post page
*/
router.post('/accounts/signup', (req,res)=>{
    const {name, email, password} = req.body;
    user.findOne({email:email})
        .then((existingUser)=>{
            if(existingUser){
                return res.status(422).json({
                    error: "User already exists with that E-Mail! Please login!"
                })
            }
            const newUser = new user({
                name,
                email,
                password
            })
            bcrypt.genSalt(10,(err, salt)=>{
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err){
                        return res.status(400).json({error: "Error hasing password!"});
                    }
                    newUser.password = hash;
                    newUser.save()
                    .then(() => res.status(200).json({success: "Successfully Signed Up!"}))
                    .catch(err => res.status(400).json({error: err}));
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
})

module.exports = router;