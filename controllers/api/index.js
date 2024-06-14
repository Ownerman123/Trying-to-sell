const router = require("express").Router();

const listingroutes = require("./listingroutes");
const userRoutes = require("./userroutes");
const chatRoutes = require("./chatroutes");
<<<<<<< HEAD
const respondRoutes = require("./respondroutes");
=======
const cloudinaryRoutes = require('./cloudinary')
>>>>>>> e188798ab1854c227eba05b8c3726dcf3c650429

router.use("/chat", chatRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingroutes);
<<<<<<< HEAD
router.use("/response", respondRoutes);
=======
router.use('/cloudinary', cloudinaryRoutes)
>>>>>>> e188798ab1854c227eba05b8c3726dcf3c650429

module.exports = router;
