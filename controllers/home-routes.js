const router = require('express').Router();
//needs model connections in the curly fries
const { Home, Decor, User } = require('../models');

//GET Routes
//GET the login/signup page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//GET all saved homes
router.get('/', async (req, res) => {
    try {
        const dbHomeData = await Home.findAll({
           
            include: [
                { model: User },
                { model: Decor },
              ],
        });

        const homes = dbHomeData.map((home) => home.get({ plain: true }));

        res.render('homepage', { homes, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET the dashboard
router.get('/dashboard', async (req, res) => {
    try {
        const dbHomeData = await Home.findAll({
           
            include: [
                { model: User },
                { model: Decor },
              ],
        });

        const homes = dbHomeData.map((home) => home.get({ plain: true }));

        res.render('dashboard', { homes, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
});

//Post Routes

module.exports = router;