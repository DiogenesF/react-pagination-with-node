const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = Posts = mongoose.model("posts", PostsSchema);
