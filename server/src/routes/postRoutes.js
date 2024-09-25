const express = require("express");
const upload = require('../config/multerStorage'); // Import the upload middleware
const { createPost } = require('../controllers/postController');
const { getPosts } = require('../controllers/postController');

const router = express.Router();

// Use the upload middleware in the route
router.post("/", upload.array('attachments'), createPost);
router.get("/", getPosts);

module.exports = router;
