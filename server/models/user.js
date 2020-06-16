const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
})

Mongoose.model("User", userSchema)