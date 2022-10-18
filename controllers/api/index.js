const router = require('express').Router();
const savedHomeRoutes = require('./savedhomes-routes');
const decorRoutes = require('./decor-routes');
const userRoutes = require('./user-routes');
const subscribe = require('./subscribe');

router.use('/subscribe', subscribe);
router.use('/homes', savedHomeRoutes);
router.use('/decor', decorRoutes);
router.use('/users', userRoutes);

module.exports = router;
