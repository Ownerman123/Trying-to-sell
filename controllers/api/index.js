const router = require("express").Router();

const listingroutes = require("./listingroutes");
const userRoutes = require("./userroutes");
const chatRoutes = require("./chatroutes");
const respondRoutes = require("./respondroutes");
const cloudinaryRoutes = require('./cloudinary');
const locationRoutes = require ("./locationroutes");

router.use("/chat", chatRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingroutes);
router.use("/response", respondRoutes);
router.use('/cloudinary', cloudinaryRoutes);
router.use("/location", locationRoutes);

module.exports = router;
