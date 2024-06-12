const sequelize = require('../config/connection');
const { Listing } = require('../models');

const listingData = [
  {
    title: "Monopoly",
    description: "holds alot of sentimental value but my friends say it must go",
    price: 5,
    user_id: 1,
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Boulder",
    description: "its not just a boulder its a rock! the pioneers used to ride these babies for miles",
    price: 5000,
    user_id: 3,
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "pants",
    description: "has holes",
    price: 1,
    user_id: 3,
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Gary",
    description: "my pet snail",
    price: 20,
    user_id: 3,
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "guitar of my dreams",
    description: "No STAIRWAY?!",
    price: 5000,
    user_id: 2,
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  },
];

const seedListings = async () => {
  await Listing.bulkCreate(listingData);
};

module.exports = seedListings;
