const sequelize = require('../config/connection');
const seedListings = require('./listings');
const seedUsers = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedListings();

  process.exit(0);
};

seedAll();