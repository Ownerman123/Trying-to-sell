//import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary');

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: "drmzgx5pw", 
        api_key: "664175232868797", 
        api_secret: "1xhnVAvtMkLjIL3uYNaXZdPWeK8" // Click 'View Credentials' below to copy your API secret
    });
    
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
    
    console.log("upload result",uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("shoes", {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log( "optimizer url",optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();