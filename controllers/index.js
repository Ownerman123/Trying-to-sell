const router = require("express").Router();

const homepageRoutes = require("./homepageroutes");
const userRoutes = require("./api/userroutes");
const controllerroutes = require("./api");
const cloudinaryRoutes = require("./api/cloudinary");

router.use("/api", controllerroutes);
router.use("/", homepageRoutes);
router.use("/api/users", userRoutes);
router.use("/api/cloudinary", cloudinaryRoutes);





module.exports = router;
