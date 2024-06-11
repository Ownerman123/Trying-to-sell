const router = require("express").Router();

const homepageRoutes = require("./homepageroutes");
const listingRoutes = require("./api/listingroutes");
const controllerroutes = require("./api");

router.use("/api", controllerroutes);
router.use("/home", homepageRoutes);
router.use("/api/listings", listingRoutes);

router.use('/api', controllerroutes)
router.use('/', homepageRoutes);


module.exports = router;
module.exports = router;
