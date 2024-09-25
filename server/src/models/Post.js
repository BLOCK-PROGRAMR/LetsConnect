const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    content: { type: String, required: true },
    images: { type: [String], required: false }, // Array of image URLs
});

module.exports = mongoose.model("Post", PostSchema);
