const express = require("express");
const router = express.Router();
const { User, Post, Chat } = require("../../models");

router.get("/login", (req, res) => {
  res.render("login");
});
// Route for logging in
router.post("/login", async (req, res) => {
  // Handle login...
});

// Route for signing up
router.post("/signup", async (req, res) => {
  // Handle signup...
});

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const listingData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const listings = listingData.map((listing) => listing.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      listings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
