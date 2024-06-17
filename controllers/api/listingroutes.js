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

// router.post("/", async (req, res) => {
//   try{
//     newlisting = await Listing.create(req.body);

//     res.json({ message: 'listing created.' });
//   }catch (err) {
//     res.status(500).json(err);
//   }
// })

router.post('/', async (req, res) => {
  try {
    // Destructure potential fields from the request body
    const { title, description, price, imageUrl, user_id, date_created, location } = req.body;

    // Prepare the data object for Listing.create based on the provided fields
    let data = {
      title,
      description,
      price,
    };

    // If imageUrl is provided, use it, otherwise check for img_url (to support both request formats)
    data.img_url = imageUrl || req.body.img_url;

    // Add optional fields if they are provided
    if (user_id) {
      data.user_id = user_id
    }
    if (date_created) {
      data.date_created = date_created
    }
    if (location) {
      data.location = location
    }

    // Create the listing with the prepared data
    const newListing = await Listing.create(data);

    // Respond with the created listing
    res.status(201).json(newListing);
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ message: 'Failed to create listing' });
  }
});

router.delete('/listings/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Listing.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(200).send({ message: `Listing ${id} deleted.` });
    } else {
      res.status(404).send({ message: 'Listing not found.' });
    }
  } catch (error) {
    console.error('Failed to delete listing:', error);
    res.status(500).send({ message: 'Failed to delete listing due to an internal error.' });
  }
});

module.exports = router;

module.exports = router;
