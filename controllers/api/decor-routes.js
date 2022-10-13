const router = require('axios').Router();
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

module.exports = router;