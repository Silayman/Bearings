const Mongoose = require('mongoose');
const {ObjectId} = Mongoose.Schema.Types;
const postSchema = new Mongoose.Schema({
    caption:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: true
    },
    author:{
        type: ObjectId,
        referrer: "user"
    }
})

const post = Mongoose.model("Post", postSchema); 
module.exports = post; //export user