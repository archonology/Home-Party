const router = require('express').Router();
const { Home, Decor, User } = require('../models');
const withAuth = require('../utils/auth');

//GET Routes
//GET the login/signup page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

//GET all saved homes and decor
router.get('/', async (req, res) => {
    try {
        const dbHomeData = await Home.findAll({

            include: [
                { model: User },
                { model: Decor },
            ],
        });

        const dbDecorData = await Decor.findAll({

            include: [
                { model: User },
                { model: Home },
            ],
        });

        const homes = dbHomeData.map((home) => home.get({ plain: true }));
        const decors = dbDecorData.map((decor) => decor.get({ plain: true }));
        res.render('homepage', { homes, decors, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET the homes and decor to the dashboard 
router.get('/dashboard', withAuth, async (req, res) => {
    console.log(req.body);
    console.log(req.session);
    try {
        const dbHomeData = await Home.findAll({
            where: {
                //user_id: req.session.user_id
                user_id: 1
              },

            include: [
                { model: User },
                { model: Decor },
            ],
        });

        const dbDecorData = await Decor.findAll({
            where: {
                // user_id: req.session.user_id
                user_id: 1
              },

            include: [
                { model: User },
                { model: Home },
            ],
        });

        const homes = dbHomeData.map((home) => home.get({ plain: true }));
        const decors = dbDecorData.map((decor) => decor.get({ plain: true }));
        console.log(homes)
        res.render('dashboard', { homes, decors, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET all saved users for subscribing
router.get('/subscribe', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        const users = dbUserData.map((user) => user.get({ plain: true }));
        res.render('subscribe', { users, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard/updatehome', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        const users = dbUserData.map((user) => user.get({ plain: true }));
        res.render('savedhomes', { users, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;