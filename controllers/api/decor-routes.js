const router = require('express').Router();
const { Home, User, Decor } = require('../../models');

//GET all saved decor and it's associations (api/decor)
router.get('/', async (req, res) => {
  try {
      const dbDecorData = await Decor.findAll({
          include: [{ model: User }, { model: Home }],
      });

      res.status(200).json(dbDecorData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
        const dbDecorData = await Decor.create(req.body, {
            include: [{ model: User }, { model: Comment }],
            product_name: req.body.product_name,
            description: req.body.description,
            price: req.body.price,
            link: req.body.link,
            home_id: req.session.home_id, //need to attach through session?,
            user_id: req.session.user_id,//need to attach through session?
        });
      
        const decors = dbBlogData.map((decor) => decor.get({ plain: true }));
        res.render('dashboard', { decors, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
  });

// async function getDecor() {
//     try {
//         const dbDecorData = await Decor.findAll({
//             include: [{ model: User }, { model: Home }],
//         });
//         const response = await axios.get('/');
//         res.status(200).json(dbDecorData);
//     } catch (error) {
//         res.status(500).json(err);
//     }
// }

// getDecor();

module.exports = router;