const express = require("express");
const router = express.Router();
const { User, Post } = require("../../models");

// Route to fetch all listings and display them
router.get("/", async (req, res) => {
  try {
    // Fetch all listings and join with user data
    const listingData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"], // Only include the user's name
        },
      ],
      order: [["createdAt", "DESC"]], // Assuming you want the newest posts first
    });

    // Serialize data to send to the frontend
    const listings = listingData.map((listing) => listing.get({ plain: true }));

    // Render the listings page with the fetched data
    res.render("listings", {
      // Make sure the view file is 'listings.hbs'
      listings,
      logged_in: req.session.logged_in, // Assume session handling for login status
    });
  } catch (err) {
    console.error("Failed to fetch listings:", err);
    res.status(500).json(err);
  }
});

// Additional routes for individual listing operations can be added here
// Example: Get a single listing by ID
router.get("/:id", async (req, res) => {
  try {
    const listingData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    if (!listingData) {
      res.status(404).json({ message: "No listing found with this id!" });
      return;
    }

    const listing = listingData.get({ plain: true });

    // Render a page or return data for a single listing
    res.render("listing-details", {
      // Make sure you have a 'listing-details.hbs' view file
      listing,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error("Error fetching listing by ID:", err);
    res.status(500).json(err);
  }
});
// Export the router
module.exports = router;
