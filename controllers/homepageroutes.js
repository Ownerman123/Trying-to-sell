const express = require("express");
const router = express.Router();
const { Listing, User } = require("../models");
const getLocation = require('../utils/getLocation');

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
    console.log(listingData);

    const listings = listingData.map((listing) => listing.get({ plain: true }));
    res.render("homepage", {
      listings,
      logged_in: req.session.logged_in
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
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log("dang");
  }
});

router.get("/listing/:id", async (req, res) => {
  console.log(req.params);
  try {
    const listingResponse = await fetch(`http://localhost:3001/api/listings/${req.params.id}`);
    console.log("THIS IS THE THING", listingResponse);
    if (!listingResponse.ok) {
      if(listingResponse.status === 404 ){
        res.status(404).send("404 could not find listing")
      }else{
        throw new Error('Failed to fetch listing data');
      }
    }

    const listingdata = await listingResponse.json();
    const currentUser = await fetch("http://localhost:3001/api/user");
    console.log("this is the data", listingdata);
    console.log(req.session.user);

    res.render("individuallisting", {
      listing: listingdata,
      logged_in: req.session.logged_in,
      logged_user: currentUser.id
    });
  } catch (error) {
    console.error('Error fetching listing data:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get("/newListing", async (req, res) => {
  try {
    const locationData = await getLocation();
    const location = locationData ? `${locationData.city}, ${locationData.country_name}` : "";

    res.render("newListing", { location , user_id: req.session.user_id });
  } catch (err) {
    console.error("Failed to fetch location data:", err);
    res.status(500).json(err);
  }
});

router.get("/setLogin", (req, res) => {
  req.session.logged_in = true;
  req.session.user_id = 1; // Set this to a valid user ID if needed
  res.send("You are now logged in for testing purposes.");
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
