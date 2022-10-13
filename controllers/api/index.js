const router = require('express').Router();
const savedHomeRoutes = require('./savedhomes-routes');
const decorRoutes = require('./decor-routes');
const userRoutes = require('./user-routes');


router.use('/homes', savedHomeRoutes);
router.use('/decor', decorRoutes);
router.use('/users', userRoutes);

module.exports = router;
