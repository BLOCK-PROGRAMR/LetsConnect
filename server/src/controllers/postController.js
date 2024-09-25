const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { postContent } = req.body;
    const files = req.files;

    try {
        const fileUrls = files.map(file => file.path);

        const newPost = new Post({
            content: postContent,
            images: fileUrls,
        });

        await newPost.save();
        res.status(201).json({ message: "Post created successfully", files: fileUrls });
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
};
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find(); // Fetch all posts
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
