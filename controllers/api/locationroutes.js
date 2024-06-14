const express = require('express');
const router = express.Router();
const getLocation = require('../../utils/getLocation');

router.get('/location', async (req, res) => {
  try {
    const locationData = await getLocation();
    if (!locationData) {
      return res.status(500).json({ message: 'Unable to fetch location data.' });
    }
    res.json(locationData);
  } catch (error) {
    console.error('Error fetching location data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
