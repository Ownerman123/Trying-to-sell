const router = require("express").Router();

const listingroutes = require("./listingroutes");
const userRoutes = require("./userroutes");
const chatRoutes = require("./chatroutes");
const respondRoutes = require("./respondroutes");
const cloudinaryRoutes = require('./cloudinary')

router.use("/chat", chatRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingroutes);
router.use("/response", respondRoutes);
router.use('/cloudinary', cloudinaryRoutes)

module.exports = router;
