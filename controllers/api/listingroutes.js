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
    console.log(listing);

    // Render a page or return data for a single listing
    res.json(listing);
  } catch (err) {
    console.error("Error fetching listing by ID:", err);
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
try{
  newlisting = await Listing.create(req.body);

  res.json({ message: 'listing created.' });
}catch (err) {
  res.status(500).json(err);
}

})

router.post('/listings', async (req, res) => {
  
  try {
    console.info('Request Body:', req.body.imageUrl);
    
    const newListing = await Listing.create({
      img_url: req.body.imageUrl,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      user_id: req.body.user_id,
      date_created: req.body.date_created,
      location: req.body.location,
    });
    res.status(201).json({newListing, });
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ message: `${error} Failed to create listing`,  });
  }
});

module.exports = router;
