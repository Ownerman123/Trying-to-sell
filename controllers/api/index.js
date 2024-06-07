const router = require("express").Router();

const listingRoutes = require("./listingroutes");
const userRoutes = require("./userroutes");
const chatRoutes = require("./chatroutes");

router.use("/chat", chatRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingRoutes);

module.exports = router;
