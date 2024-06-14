const router = require("express").Router();

const listingroutes = require("./listingroutes");
const userRoutes = require("./userroutes");
const chatRoutes = require("./chatroutes");
const respondRoutes = require("./respondroutes");

router.use("/chat", chatRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingroutes);
router.use("/response", respondRoutes);

module.exports = router;
