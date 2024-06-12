const sequelize = require('../config/connection');
const seedUsers = require("./user");
const seedListings = require("./listings");

const seedAll = async () => {
    console.log("Starting database synchronization...");
    try {

        await sequelize.sync({ force: true }); 
        console.log("Database synchronized successfully.");

        console.log("Starting database seeding...");
        await seedUsers();
        console.log("Users seeded successfully.");

        await seedListings();
        console.log("Listings seeded successfully.");

        console.log("Database seeding complete.");
    } catch (error) {
        console.error("Error during database seeding:", error);
    } finally {
        await sequelize.close();
        console.log("Database connection closed.");
        process.exit(0);
    }
};

seedAll();
