const express = require("express");
const router = express.Router();
const { Listing, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listingData = await Listing.findAll({
      include: [
        {
          model: User,
          attributes: ['name'], // Only include the user's name
        },
      ],
      order: [["createdAt", "DESC"]] // Assuming you want the newest posts first
    });

    const listings = listingData.map((listing) => listing.get({ plain: true }));
    res.render("homepage", {
      listings,
      logged_in: true
    });

  } catch (err) {
    console.error("Failed to fetch listings:", err);
    res.status(500).json(err);
  }
});


router.get("/login", async (req, res) => {
    try {
      res.render("login", {
        // objects for info to dynamically put to the page
      });
    } catch (err) {
      res.status(500).json(err);
      console.log("dang");
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
