const router = require('express').Router();
const { Home, User, Decor } = require('../../models');

// GET all saved homes (api/homes)
router.get('/', async (req, res) => {
    try {
        const dbHomeData = await Home.findAll({
            include: [{ model: User }, { model: Decor }],
        });

        res.status(200).json(dbHomeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single home
router.get('/:id', async (req, res) => {
    try {
        const dbHomeData = await Home.findByPk(req.params.id, {
            include: [{ model: User }, { model: Decor }],
        });
        //for testing routes
        res.status(200).json(dbHomeData);

        //   const decors = dbDecorData.map((blog) => blog.get({ plain: true }));
        // res.render('decor', { decors, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // for testing route
    console.log(req.body);
    console.log(req.session);

    try {
        const dbHomeData = await Home.create({

            title: req.body.title,
            address: req.body.address,
            price: req.body.price,
            bedrooms: req.body.bedrooms,
            square_feet: req.body.square_feet,
            link: req.body.link,
            user_id: req.session.user_id,

        });
        res.status(200).json(dbHomeData);

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
