require('dotenv').config();
const axios = require('axios');

const getLocation = async () => {
  try {
    const response = await axios.get('https://api.ipgeolocation.io/ipgeo', {
      params: {
        apiKey: process.env.API_KEY // Ensure you have your API key in your .env file
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
};

module.exports = getLocation;
