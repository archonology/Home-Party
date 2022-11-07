const router = require('express').Router();
//needs model connections in the curly fries
const { Home, User, Decor } = require('../../models');

// GET all user info (api/users)
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            include: [{ model: Home }, { model: Decor }],
        });
  
        res.status(200).json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  //GET all specific info (/api/users/:?)
router.get('/:id', async (req, res) => {
    try {
      const dbUserData = await User.findByPk(req.params.id,{
        include: [{ model: Home }, { model: Decor }],
      });
  
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //CREATE new user
router.post('/', async (req, res) => {
  console.log(req.body);
  console.log(req.session);
    try {
      const dbUserData = await User.create({
        include: [{ model: Home }, { model: Decor }],
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        //save the user id
        req.session.user_id = dbUserData.id;
        req.session.user_name = dbUserData.username;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // LOGIN
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        //need this for calling the logged in user data
        req.session.user_id = dbUserData.id;
        req.session.user_name = dbUserData.username;
  
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;