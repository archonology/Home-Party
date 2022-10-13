const router = require('axios').Router();

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;