const router = require('axios').Router();
//needs model connections in the curly fries
const { Home, User, Decor } = require('../../models');

//GET all user info (api/users)
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            include: [{ model: User }, { model: Home }],
        });
  
        res.status(200).json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
  });


module.exports = router;