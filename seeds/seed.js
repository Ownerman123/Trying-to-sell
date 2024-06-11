const seedUsers = require("./userSeeds");
const seedListings = require("./listingSeeds");

const seedAll = async () => {
  console.log("Starting database seeding...");
  try {
    await seedUsers(); // Seed users first
    console.log("Users seeded successfully.");

    await seedListings(); // Then seed listings
    console.log("Listings seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedAll().then(() => {
  console.log("Database seeding complete.");
  process.exit(0); // Exit the process to avoid hanging
});
