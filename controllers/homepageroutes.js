const express = require('express');

const router = express.Router();


router.get('/',  async (req, res) => {

    try{
    res.render('homepage', {
        // objects for info to dynamically put to the page
    });
} catch (err) {
    res.status(500).json(err);
    console.log('dang')
}


});

module.exports = router;

// for example
// router.get('/', async (req, res) => {
//     try {
//      const dbGalleryData = await Gallery.findAll({
//         include: [
//           {
//             model: Painting,
//             attributes: ['filename', 'description'],
//           },
//         ],
//       });
  
// ?      const galleries = dbGalleryData.map((gallery) =>    this line defines an object (galleries) to be used later
//         gallery.get({ plain: true })
//       );
  
//   ?    res.render('homepage', {            then renders to the homepage handlebar in the body of the main handlebar with the objects and other keys inside the object being passed in. 
//         galleries,                              this is the galleries defined earlier
//         loggedIn: req.session.loggedIn,          this is a key in the main object being passed that holds the value of loggedIn from the session cookie.
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });