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
router.get('/dashboard', async (req, res) => {
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
        res.render('dashboard', { homes, decors, loggedIn: req.session.loggedIn, });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET the decor to the dashboard 
// router.get('/dashboard', async (req, res) => {
//     try {
//         const dbDecorData = await Decor.findAll({

//             include: [
//                 { model: User },
//                 { model: Home },
//             ],
//         });

//         const decors = dbDecorData.map((decor) => decor.get({ plain: true }));

//         res.render('dashboard', { decors, loggedIn: req.session.loggedIn, });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//Post Routes

module.exports = router;