const express = require("express");
const router = express.Router();
const { User, Listing } = require("../../models");

// Additional routes for individual listing operations can be added here
// Example: Get a single listing by ID
router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const listingData = await Listing.findByPk(req.params.id, {
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
    res.json(listing);
  } catch (err) {
    console.error("Error fetching listing by ID:", err);
    res.status(500).json(err);
  }
});

router.post('/listings', async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;
    const newListing = await Listing.create({ title, description, price, imageUrl });
    res.status(201).json(newListing);
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ message: 'Failed to create listing' });
  }
});

module.exports = router;
