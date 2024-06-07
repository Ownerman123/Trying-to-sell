const router = require('express').Router();

const homepageRoutes = require('./homepageroutes')
const controllerroutes = require('./api')


router.use('/api', controllerroutes)
router.use('/home', homepageRoutes);


module.exports = router;