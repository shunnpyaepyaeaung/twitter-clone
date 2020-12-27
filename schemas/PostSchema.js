const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Post;
const PostSchema = new Schema({
    content: {type: String, trim: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "User"},
    pinned: Boolean
},{timestamps: true});

module.exports = Post = mongoose.model('Post', PostSchema);