const router = require('axios').default;
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;