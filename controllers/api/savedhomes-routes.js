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
            bathrooms: req.body.bathrooms,
            square_feet: req.body.square_feet,
            link: req.body.link,
            user_id: req.session.user_id,

        });
        res.status(200).json(dbHomeData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/dashboard/updatehome', async (req, res) => {
    try {
        const dbHomeData = await Home.update({

            title: req.body.title,
            address: req.body.address,
            price: Number(req.body.price),
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
            square_feet: Number(req.body.square_feet),
            link: req.body.link,
            user_id: req.session.user_id,

        },
            {
                where: {
                    user_id: req.params.user_id,

                },
            }
        );


        res.status(200).json(dbHomeData);

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
