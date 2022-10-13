const router = require('express').Router();
const { Home, User, Decor } = require('../../models');

//GET all blog posts to view API (api/posts)
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