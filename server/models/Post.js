const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    link: String,
    description: String,
    likes: Number,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comments'}],
    userid: String,
    username: String,
    userimg: String}, 
    { timestamps: {type:Number, default: new Date().getTime()}
});

const postModel = mongoose.model('Post', PostSchema);

module.exports = postModel;	