const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'posts',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
