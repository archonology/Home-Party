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
    try {
        const dbHomeData = await Home.create(req.body, {
            include: [{ model: User }, { model: Decor }],
            title: req.body.title,
            address: req.body.address,
            price: req.body.price,
            bedrooms: req.body.bedrooms,
            square_feet: req.body.square_feet,
            link: req.body.link,
            user_id: req.body.user_id,
        
        });

        
 





        res.status(200).json(dbHomeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// async function getHomes() {
//     try {
//         const dbHomeData = await Home.findAll({
//             include: [{ model: User }, { model: Decor }],
//         });
//         const response = await axios.get('/');
//         res.status(200).json(dbHomeData);
//     } catch (error) {
//         res.status(500).json(err);
//     }
// }

// getHomes();

module.exports = router;
