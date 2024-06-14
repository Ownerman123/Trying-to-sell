const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer =  require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const streamifier = require('streamifier');
require('dotenv').config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.API_SECRET
});

router.post('/upload', upload.single('file'), (req, res) => {
    let streamUpload = new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
          {
            folder: 'uploads',
            resource_type: 'auto'
          },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

       streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    streamUpload
        .then(result => res.json({ url: result.secure_url }))
        .catch(error => {
            console.error('Error uploading image to Cloudinary:', error);
            res.status(500).json({ error: 'An error occurred while uploading the image.' });
        });
});

module.exports = router;