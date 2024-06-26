const sequelize = require('../config/connection');
const { Listing } = require('../models');

const listingData = [
  {
    title: "Monopoly",
    description: "holds alot of sentimental value but my friends say it must go",
    price: 5,
    user_id: 1,
    location: "New York, NY", 
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    img_url: "https://res.cloudinary.com/drmzgx5pw/image/upload/v1718406793/uploads/acri2oxrxyrpjjbbwyqc.png"
  },
  {
    title: "Boulder",
    description: "its not just a boulder its a rock! the pioneers used to ride these babies for miles",
    price: 5000,
    user_id: 3,
    location: "Boulder, CO", 
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    img_url: "https://res.cloudinary.com/drmzgx5pw/image/upload/v1718406671/uploads/wtxf2ox05mapucjpa7zv.png"
  },
  {
    title: "pants",
    description: "has holes",
    price: 1,
    user_id: 3,
    location: "San Francisco, CA",
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    img_url: "https://res.cloudinary.com/drmzgx5pw/image/upload/v1718406552/uploads/urbuyxpn8x4sy4oqf7ea.png"
  },
  {
    title: "Gary",
    description: "my pet snail",
    price: 20,
    user_id: 3,
    location: "Bikini Bottom",
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    img_url: "https://res.cloudinary.com/drmzgx5pw/image/upload/v1718406348/uploads/z2i3uasgtls7trghhg8w.png"
  },
  {
    title: "guitar of my dreams",
    description: "No STAIRWAY?!",
    price: 5000,
    user_id: 2,
    location: "Seattle, WA",
    date_created: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    img_url: "https://res.cloudinary.com/drmzgx5pw/image/upload/v1718404725/uploads/t5jkysnrldoxfq2qqf7v.png"
  },
];

const seedListings = async () => {
  await Listing.bulkCreate(listingData);
};

module.exports = seedListings;
