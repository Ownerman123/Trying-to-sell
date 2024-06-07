const { Listing } = require('../models');

const userdata = [
  {
    title: "Monopoly",
    description: "holds alot of sentimental value but my friends say it must go",
    price: 5 ,
    user_id: 1 
  },
  {
    title: "Boulder",
    description: "its not just a boulder its a rock! the pioneers used to ride these babies for miles",
    price: 5000,
    user_id: 3 
  },
  {
    title: "pants",
    description: "has holes",
    price: 1 ,
    user_id: 3 
  },
  {
  title: "Gary",
    description: "my pet snail",
    price: 20 ,
    user_id: 3 },
    {
        title: "guitar of my dreams",
          description: "No STAIRWAY?!",
          price: 5000 ,
          user_id: 2 },
];

const seedListings= () => Listing.bulkCreate(userdata);

module.exports = seedListings;
